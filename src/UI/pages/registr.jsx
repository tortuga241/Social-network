import React, { useState } from "react";
import Layout from '../../Layouts/layout.jsx'
import './Style/registr.css';
import '../../App.css'

const Registr = () => {
    const [isSignIn, setIsSignIn] = useState(true); // Добавляем состояние для отслеживания режима входа/регистрации

    return (
        <div className="MainDivRegistrPage">
            <Layout />
            <div className="LoginOrRegisterDiv">
            <div className={`SingInBut ${isSignIn ? 'active' : ''}`}><button onClick={() => setIsSignIn(true)}>Вход</button></div>
                <div className={`SingInBut ${!isSignIn ? 'active' : ''}`}><button onClick={() => setIsSignIn(false)}>Регистрация</button></div>
            </div><br />
            {isSignIn ? (
                <div className="SingInDiv">
                    <p className="TextContentSingInDiv">Номер телефона</p>
                    <div className="PhoneNumberInput">
                        <input type="text" placeholder=" Номер телефона или почта" style={{ width: '90%', borderRadius: '10px', height: '30px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                    </div>
                    <p className="TextContentSingInDiv">Пароль</p>
                    <div className="PasswordInput">
                        <input type="password" placeholder=" Введите пороль" style={{ width: '90%', borderRadius: '10px', height: '30px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                    </div><br />
                    <div className="HelperSingInDiv">
                        <span className="RememborInput"><input type="checkbox" /> Запомнить меня</span>
                        <span className="ForgottenPassword">Забыли пароль?</span>
                    </div>
                    <div className="SingInButBottom"><button className="SingInButBot">Войти</button></div>
                </div>
            ) : (
                <div className="RegistrDiv">
                    <div className="RegistrInputs">
                        <p className="TextContentRegistrDiv">Номер телефона</p>
                        <input type="text" placeholder=" Номер телефона или почта"  style={{ width: '90%', borderRadius: '10px', height: '30px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                        <p className="TextContentRegistrDiv">Имя</p>
                        <input type="text" placeholder=" Введите имя"  style={{ width: '90%', borderRadius: '10px', height: '30px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                        <p className="TextContentRegistrDiv">Фамилия</p>
                        <input type="text" placeholder=" Введите Фамилию"  style={{ width: '90%', borderRadius: '10px', height: '30px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                        <p className="TextContentRegistrDiv">Пароль</p>
                        <input type="password" placeholder=" Придумайте пороль"  style={{ width: '90%', borderRadius: '10px', height: '30px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                        <p className="TextContentRegistrDiv">Подтвердите пароль</p>
                        <input type="password" placeholder="Введите пороль"  style={{ width: '90%', borderRadius: '10px', height: '30px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                    </div><br />
                    <div className="CheckBoxAgreements">
                        <span className="RememborInput"><input type="checkbox" /> Я соглашаюсь с пользовательским соглашением</span>
                    </div><br />
                    <div className="RegistrButBottom"><button className="RegistrButBot">Создать аккаунт</button></div>
                </div>
            )}
        </div>
    )
}

export default Registr;