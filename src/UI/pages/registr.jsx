import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Style/registr.css';
import '../../App.css'
import eyeIcon from './Icons/eye.png'
import eyeSlashIcon from './Icons/eye-slash.png'

const Registr = () => {
    const [isSignIn, setIsSignIn] = useState(true); // Состояние для отслеживания режима входа/регистрации
    const [elementId, setElementId] = useState('test1'); // Состояние для хранения текущего id

    const [loginLogin, setLoginLogin] = useState('') // Значение поля логин, при входе
    const [passwordLogin, setPasswordLogin] = useState('') // Значение поля пароль, при входе

    // Часть относится к регистрации
    const [loginRegister, setLoginRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [surnameRegister, setSurnameRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [passwordConfirmRegister, setPasswordConfirmRegister] = useState('')


    //  Функция для видимости пароля
    const [passwordVisibleSignIn, setPasswordVisibleSignIn] = useState(false); 
    const [passwordVisibleRegister, setPasswordVisibleRegister] = useState(false);
    const [confirmPasswordVisibleRegister, setConfirmPasswordVisibleRegister] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'signIn') {
            setPasswordVisibleSignIn(!passwordVisibleSignIn);
        } else if (field === 'register') {
            setPasswordVisibleRegister(!passwordVisibleRegister);
        } else if (field === 'confirmRegister') {
            setConfirmPasswordVisibleRegister(!confirmPasswordVisibleRegister);
        }
    };

        // Запрос - вход
        const handleLoginIn = () => {
            const loginData = {
                login: loginLogin,
                password: passwordLogin
            }
    
            console.log(loginData)
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(loginData)
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status == 200){
                        localStorage.setItem('user', JSON.stringify(response.accountData))
                        location.reload()
                    }else{
                        console.log('Ошибка входа')
                    }
                })
                .catch(error => {
                    console.error('Error fetching login:', error);
                });
        }
    
        // Регистрация
        const handleRegister = () => {
            const registerData = {
                login: loginRegister,
                email: emailRegister,
                name: nameRegister,
                surname: surnameRegister,
                password: passwordRegister,
                passwordConfirm: passwordConfirmRegister,
            }
            console.log(registerData);
        }
    

     // Функция для изменения id при нажатии
    const handleIdChange = () => {
        setElementId((prevId) => (prevId === 'test1' ? 'test2' : 'test1'));
    };

    return (
        <div className="MainDivRegistrPage">

            {/* HEADER */}
            <div className="Header">
                <div className="HeaderLogo">Racoon</div>
            </div>

            {/* ФУНКЦИЯ ВЫБОРА ВХОДА ИЛИ РЕГИСТРАЦИИ */}
            <div className="LoginOrRegisterDiv">
                <div className={`SingInBut ${isSignIn ? 'active' : ''}`}>
                    <button onClick={() => setIsSignIn(true)}>Вход</button>
                </div>
                <div className={`SingInBut ${!isSignIn ? 'active' : ''}`}>
                    <button onClick={() => setIsSignIn(false)}>Регистрация</button>
                </div>
            </div><br />

            {/* ВХОД */}
            {isSignIn ? (
                <div className="SingInDiv">
                    <p className="TextContentSingInDiv">Номер телефона</p>
                    <div className="PhoneNumberInput">
                        <input type="text" onChange={(e) => {setLoginLogin(e.target.value)}} placeholder="Номер телефона или почта" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px',paddingLeft: '10px' }}/>
                    </div>
                    <p className="TextContentSingInDiv">Пароль</p>
                    <div className="PasswordInput" style={{ position: 'relative', width: '86.5%', borderRadius: '40px', height: '40px', background: 'var(--COLOR-2, #3C4245)', }}>
                        <input
                            type={passwordVisibleSignIn ? 'text' : 'password'}
                            placeholder="Введите пароль"
                            className="password-input"
                            onChange={(e) => {setPasswordLogin(e.target.value)}}
                            style={{width: '100%', borderRadius: '40px', height: '40px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px', paddingLeft: '10px'}}/>
                        <img
                            src={passwordVisibleSignIn ? eyeIcon : eyeSlashIcon}
                            alt={passwordVisibleSignIn ? 'Hide password' : 'Show password'}
                            onClick={() => togglePasswordVisibility('signIn')}
                            style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}/>
                    </div><br />
                    <div className="HelperSingInDiv">
                        <div className="RememborInput">
                            <input type="checkbox" className="roundCheckbox" id="rememberMeCheckbox"/>
                            <div id={elementId} onClick={handleIdChange}></div>
                            <label htmlFor="rememberMeCheckbox"> Запомнить меня</label>
                        </div>
                        <span className="ForgottenPassword"><Link to={'/forgotPassword'} className="custom-link">Забыли пароль?</Link></span>
                    </div>
                    <div className="SingInButBottom"><button className="SingInButBot" onClick={handleLoginIn}>Войти</button></div>
                </div>



            ) : (

                // РЕГИСТРАЦИЯ
                <div className="RegistrDiv">
                    <div className="RegistrInputs">
                        <p className="TextContentRegistrDiv">Логин</p>
                        <input type="text" placeholder="Введите логин" onChange={(e) => {setLoginRegister(e.target.value)}} style={{ width: '88%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px', paddingLeft: '10px' }}/>
                        <p className="TextContentRegistrDiv">Почта</p>
                        <input type="text" placeholder="Введите почту" onChange={(e) => {setEmailRegister(e.target.value)}} style={{ width: '88%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px', paddingLeft: '10px' }}/>
                        <p className="TextContentRegistrDiv">Имя</p>
                        <input type="text" placeholder="Введите имя" onChange={(e) => {setNameRegister(e.target.value)}} style={{ width: '88%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px', paddingLeft: '10px' }}/>
                        <p className="TextContentRegistrDiv">Фамилия</p>
                        <input type="text" placeholder="Введите Фамилию" onChange={(e) => {setSurnameRegister(e.target.value)}} style={{ width: '88%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px',  paddingLeft: '10px' }}/>
                        <p className="TextContentRegistrDiv">Пароль</p>
                        <div style={{ position: 'relative', width: '88%' }}>
                            <input
                                type={passwordVisibleRegister ? 'text' : 'password'}
                                placeholder="Придумайте пароль"
                                className="password-input"
                                onChange={(e) => {setPasswordRegister(e.target.value)}}
                                style={{width: '100%', borderRadius: '40px', height: '40px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px', paddingLeft: '10px'}}/>
                            <img
                                src={passwordVisibleRegister ? eyeIcon : eyeSlashIcon}
                                alt={passwordVisibleRegister ? 'Hide password' : 'Show password'}
                                onClick={() => togglePasswordVisibility('register')}
                                style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}/>
                        </div>
                        <p className="TextContentRegistrDiv">Подтвердите пароль</p>
                        <div style={{ position: 'relative', width: '88%' }}>
                            <input
                                type={confirmPasswordVisibleRegister ? 'text' : 'password'}
                                placeholder="Введите пароль"
                                className="password-input"
                                onChange={(e) => {setPasswordConfirmRegister(e.target.value)}}
                                style={{width: '100%', borderRadius: '40px', height: '40px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '15px', paddingLeft: '10px'}}/>
                            <img
                                src={confirmPasswordVisibleRegister ? eyeIcon : eyeSlashIcon}
                                alt={confirmPasswordVisibleRegister ? 'Hide password' : 'Show password'}
                                onClick={() => togglePasswordVisibility('confirmRegister')}
                                style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}/>
                        </div>
                    </div><br />
                    <div className="CheckBoxAgreements">
                        <div className="RememborInput">
                            <input type="checkbox" className="roundCheckbox" id="rememberMeCheckbox" />
                            <div id={elementId} onClick={handleIdChange}></div>
                            <label htmlFor="rememberMeCheckbox">Я соглашаюсь с пользовательским соглашением</label>
                        </div>
                    </div><br />
                    <div className="RegistrButBottom"><button className="RegistrButBot" onClick={handleRegister}>Создать аккаунт</button></div>
                </div>
            )}
        </div>
    );
};

export default Registr;
