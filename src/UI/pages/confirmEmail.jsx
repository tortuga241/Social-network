import React, { useState } from "react";
import '../components/ForgotPasswordPage/Style/FofgotPasswordPage.css'
import { Link, useNavigate } from "react-router-dom";
// import '../App.css';

const ConfirmEmail = () => {
    const [confirmCode, setConfirmCode] = useState(null)

    const [error, setError] = useState('')
    const [displayError, setDisplayError] = useState('none')

    const navigate = useNavigate()

    const handleConfirm = () => {
        fetch('http://localhost:3000/checkCode', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({enteredCode: confirmCode})
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    navigate('/register')
                }else{
                    console.log(`Ошибка регистрации: ${response.error}`)
                    
                    if(response.error == 'confirmCode: incorrect code') setError('Код подтверждения неверный')
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
                <div className="BackOrNameDivBut2">Подтверждение почты</div>
            </div><br />
            <div className="ce-EnterNewPasswordDiv">
                <p className="TextContentForgotPasswordDiv">Код из сообщения</p>
                <input onChange={ ( e ) => { setConfirmCode( e.target.value ) } } type="password" className="ce-RenamePasswordInput" placeholder="Введите код из сообщения" style={{ paddingLeft: '20px',width: '85%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px' }} />
                <div className="ForgotPasswordButBottom">
                    <button className="ForgotPasswordButBot" onClick={handleConfirm}>Подтвердить</button>
                </div>
            </div>
            <div className="alert-modal" style={{ display: displayError }}>{error}</div>
        </div>
    )
    
}

export default ConfirmEmail;