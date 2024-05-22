import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Style/registr.css';
import '../../App.css'

const Registr = () => {
    const [isSignIn, setIsSignIn] = useState(true); // Состояние для отслеживания режима входа/регистрации
    const [elementId, setElementId] = useState('test1'); // Состояние для хранения текущего id

    // Функция для изменения id при нажатии
    const handleIdChange = () => {
        setElementId((prevId) => (prevId === 'test1' ? 'test2' : 'test1'));
    };

    return (
        <div className="MainDivRegistrPage">
            <div className="Header">
                <div className="HeaderLogo">Racoon</div>
            </div>
            <div className="LoginOrRegisterDiv">
                <div className={`SingInBut ${isSignIn ? 'active' : ''}`}>
                    <button onClick={() => setIsSignIn(true)}>Вход</button>
                </div>
                <div className={`SingInBut ${!isSignIn ? 'active' : ''}`}>
                    <button onClick={() => setIsSignIn(false)}>Регистрация</button>
                </div>
            </div><br />
            {isSignIn ? (
                <div className="SingInDiv">
                    <p className="TextContentSingInDiv">Номер телефона</p>
                    <div className="PhoneNumberInput">
                        <input type="text" placeholder="  Номер телефона или почта" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                    </div>
                    <p className="TextContentSingInDiv">Пароль</p>
                    <div className="PasswordInput">
                        <input type="password" placeholder="  Введите пароль" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                    </div><br />
                    <div className="HelperSingInDiv">
                        <div className="RememborInput">
                            <input type="checkbox" className="roundCheckbox" id="rememberMeCheckbox"/>
                            <div id={elementId} onClick={handleIdChange}></div>
                            <label htmlFor="rememberMeCheckbox"> Запомнить меня</label>
                        </div>
                        <span className="ForgottenPassword"><Link to={'/forgotPassword'} className="custom-link">Забыли пароль?</Link></span>
                    </div>
                    <div className="SingInButBottom"><button className="SingInButBot">Войти</button></div>
                </div>
            ) : (
                <div className="RegistrDiv">
                    <div className="RegistrInputs">
                        <p className="TextContentRegistrDiv">Номер телефона</p>
                        <input type="text" placeholder="  Номер телефона или почта" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px', fontFamily: 'Arial'}}/>
                        <p className="TextContentRegistrDiv">Имя</p>
                        <input type="text" placeholder="  Введите имя" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px', fontFamily: 'Arial'}}/>
                        <p className="TextContentRegistrDiv">Фамилия</p>
                        <input type="text" placeholder="  Введите Фамилию" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                        <p className="TextContentRegistrDiv">Пароль</p>
                        <input type="password" placeholder="  Придумайте пароль" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                        <p className="TextContentRegistrDiv">Подтвердите пароль</p>
                        <input type="password" placeholder="  Введите пароль" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px'}}/>
                    </div><br />
                    <div className="CheckBoxAgreements">
                        <div className="RememborInput">
                            <input type="checkbox" className="roundCheckbox" id="rememberMeCheckbox"/>
                            <div id={elementId} onClick={handleIdChange}></div>
                            <label htmlFor="rememberMeCheckbox"> Я соглашаюсь с пользовательским соглашением</label>
                        </div>
                    </div><br />
                    <div className="RegistrButBottom"><button className="RegistrButBot">Создать аккаунт</button></div>
                </div>
            )}
        </div>
    );
};

export default Registr;
