import React, { useState } from "react";
import Layout from "../../Layouts/layout";

const Registr = () => {
    const [isSignIn, setIsSignIn] = useState(true); // Добавляем состояние для отслеживания режима входа/регистрации

    return (
        <div className="MainDivRegistrPage">
            <Layout />
            <div className="LoginOrRegisterDiv">
                <div className="SingInBut"><button onClick={() => setIsSignIn(true)}>Sign In</button></div>
                <div className="RegistrBut"><button onClick={() => setIsSignIn(false)}>Register</button></div>
            </div><br />
            {isSignIn ? (
                <div className="SingInDiv">
                    <p>Номер телефона</p>
                    <div className="PhoneNumberInput"></div>
                    <p>Пароль</p>
                    <div className="PasswordInput"></div>
                    <div className="HelperSingInDiv">
                        <span className="RememborInput"><input type="checkbox" /> Запомнить меня</span>
                        <span className="ForgottenPassword">Забыли пароль?</span>
                    </div>
                    <div className="SingInButBottom"></div>
                </div>
            ) : (
                <div className="RegistrDiv">
                    <div className="RegistrInputs">
                        <p>Номер телефона</p>
                        <input type="text" placeholder="Ваш номер телефона"/>
                        <p>Имя</p>
                        <input type="text" placeholder="Введите имя" />
                        <p>Фамилия</p>
                        <input type="text" placeholder="Введите Фамилию"/>
                        <p>Пароль</p>
                        <input type="text" placeholder="Придумайте пороль"/>
                        <p>Подтвердите пароль</p>
                        <input type="text" placeholder="Введите пороль"/>
                    </div>
                    <div className="CheckBoxAgreements">
                        <span className="RememborInput"><input type="checkbox" /> Я соглашаюсь с пользовательским соглашением</span>
                    </div>
                    <div className="RegistrButBottom"></div>
                </div>
            )}
        </div>
    )
}

export default Registr;