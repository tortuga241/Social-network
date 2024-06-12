import React, { useState } from "react";
import './Style/FofgotPasswordPage.css'
import { Link, useParams } from "react-router-dom";
import '../../../App.css';


const CreateNewPasswordPage = () => {
    const { token } = useParams() 
    console.log( token )

    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const [error, setError] = useState('')
    const [displayError, setDisplayError] = useState('none')
    const [sendStatus, setSendStatus] = useState('none')

    const sendPassword = () => {
        if(!password || !confirmPassword) {
            setError('Заполните все поля!')
            setDisplayError('flex')
            return
        }
        if(password != confirmPassword) {
            setError('Пароли не совпадают!')
            setDisplayError('flex')
            return
        }

        fetch(`http://localhost:3000/recoveryPassword/changeRecoveryData/${token}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ password })
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    setSendStatus('flex')
                }else{
                    console.log(`Ошибка восстановления пароля: ${response.error}`)

                    if(response.error == 'Change Data Base: token undefined') setError('Change Data Base: token undefined')
                    if(response.error == 'Change Data Base: account undefined') setError('Change Data Base: account undefined')
                    
                    setDisplayError('flex')
                }
            })
            .catch(error => {
                console.error('Error fetching register:', error);
            });
    }

    return (
        <div className="CreateNewPasswordPage">
            <div className="Header">
                <div className="HeaderLogo">Racoon</div>
            </div>
            <div className="BackOrNameDiv">
                    <div className="BackOrNameDivBut1"><Link to={'/register'} className="custom-link">Назад</Link></div>
                <div className="BackOrNameDivBut2">Восстановление пароля</div>
            </div><br />
            <div className="EnterNewPasswordDiv">
                <p className="TextContentForgotPasswordDiv">Новый пароль</p>
                <input type="password" onChange={(e) => { setPassword( e.target.value ) }} className="RenamePasswordInput" placeholder="Введите пароль" style={{ width: '85%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px' }} />
                <p className="TextContentForgotPasswordDiv">Подтвердите пароль</p>
                <input type="password" className="RenamePasswordInput" onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder="Введите пароль" style={{ width: '85%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px' }} /><br />
                <div className="ForgotPasswordButBottom">
                    <button className="ForgotPasswordButBot" onClick={ sendPassword }>Восстановить</button>
                </div>
                <br style={{ display: sendStatus == 'flex' ? 'none' : 'block'}}/>
                <span style={{ paddingLeft: '40px', paddingTop: '30px', color: '#90F6FF', display: sendStatus }}>Пароль успешно изменен!</span>
            </div>
            <div className="alert-modal" style={{ display: displayError }}>{error}</div>
        </div>
    )
    
}

export default CreateNewPasswordPage;