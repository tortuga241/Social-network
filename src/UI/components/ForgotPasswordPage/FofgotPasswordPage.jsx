import React, { useState } from "react";
import './Style/FofgotPasswordPage.css'
import { Link, useNavigate } from "react-router-dom";
import '../../../App.css';



const ForgotPasswordPage = () => {
    const [ email, setEmail ] = useState(null) 

    const [error, setError] = useState('')
    const [displayError, setDisplayError] = useState('none')

    const [sendStatus, setSendStatus] = useState('none')
    
    const handleRecovery = () => {
        fetch('http://localhost:3000/recoveryPassword/sendRecoveryMessage', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email })
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    setSendStatus('flex')
                }else{
                    console.log(`Ошибка восстановления пароля: ${response.error}`)

                    if(response.error == 'Recovery Password: email undefined') setError('Такого аккаунта нет')
                    if(response.error == 'SendEmail: Email undefined') setError('SendEmail: Email undefined')
                    
                    setDisplayError('flex')
                }
            })
            .catch(error => {
                console.error('Error fetching register:', error);
            });
    } 

    return (
        <div className="ForgotPasswordPage">
            <div className="Header">
                <div className="HeaderLogo">Racoon</div>
            </div>
            <div className="BackOrNameDiv">
                    <div className="BackOrNameDivBut1"><Link to={'/register'} className="custom-link">Назад</Link></div>
                <div className="BackOrNameDivBut2">Восстановление пароля</div>
            </div><br />
            <div className="ForgotPasswordDiv">
                <p className="TextContentForgotPasswordDiv">Введите вашу почту для восстановления пароля</p>
                <div className="EmailInput">
                    <input onChange={(e) => { setEmail( e.target.value ) }} type="text" placeholder="Введите вашу почту" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px' }} />
                </div>
                <br style={{ display: sendStatus == 'flex' ? 'none' : 'block'}}/>
                <span style={{ paddingLeft: '40px', color: '#90F6FF', display: sendStatus }}>Сообщение отправлено на вашу почту</span>
                <button className="ForgotPasswordButBot" onClick={ handleRecovery }>Отправить</button>
            </div>
            <div className="alert-modal" style={{ display: displayError }}>{error}</div>
        </div>
    );
};

export default ForgotPasswordPage;
