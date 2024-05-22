import React, { useState } from "react";
import './Style/FofgotPasswordPage.css'
import { Link } from "react-router-dom";
import '../../../App.css';


const CreateNewPasswordPage = () => {

    return (
        <div className="CreateNewPasswordPage">
            <div className="Header">
                <div className="HeaderLogo">Racoon</div>
            </div>
            <div className="BackOrNameDiv">
                    <div className="BackOrNameDivBut1"><Link to={'/forgotPassword'} className="custom-link">Назад</Link></div>
                <div className="BackOrNameDivBut2">Восстановление пароля</div>
            </div><br />
            <div className="EnterNewPasswordDiv">
                    <p className="TextContentForgotPasswordDiv">Новый пароль</p>
                    <input type="password" className="RenamePasswordInput" placeholder="  Введите пароль" style={{ width: '85%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px' }} />
                    <p className="TextContentForgotPasswordDiv">Подтвердите пароль</p>
                    <input type="password" className="RenamePasswordInput" placeholder="  Введите пароль" style={{ width: '85%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px' }} /><br />
                    <div className="ForgotPasswordButBottom">
                        <button className="ForgotPasswordButBot">Восстановить</button>
                    </div>
                </div>
        </div>
    )
    
}

export default CreateNewPasswordPage;