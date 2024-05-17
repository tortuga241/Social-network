import React, { useState } from "react";
import './Style/FofgotPasswordPage.css'
import { Link } from "react-router-dom";
import '../../../App.css';



const ForgotPasswordPage = () => {

    

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
                        <input type="text" placeholder="  Введите вашу почту" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px' }} />
                    </div><br />
                    <button className="ForgotPasswordButBot">Отправить</button>
                    
                </div>
                
        </div>
    );
};

export default ForgotPasswordPage;
