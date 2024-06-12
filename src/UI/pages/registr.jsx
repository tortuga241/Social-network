import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Style/registr.css';
import '../../App.css'
import eyeIcon from './Icons/eye.png'
import eyeSlashIcon from './Icons/eye-slash.png'

const Registr = () => {
    const [isSignIn, setIsSignIn] = useState(true); // Состояние для отслеживания режима входа/регистрации
    const [elementIdLogin, setElementIdLogin] = useState('test1'); // Состояние для хранения текущего id
    const [elementIdRA, setElementIdRA] = useState('test1');
    const [rememberMeStatus, setRememberMeStatus] = useState(false)
    const [ruleAccept, setRuleAccept] = useState(false)
    const [alertDisplay, setAlertDisplay] = useState('none')

    const [error, setError] = useState('')
    const [displayError, setDisplayError] = useState('none')

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

    const navigate = useNavigate()

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
                    console.log('Ошибка входа: '+response.error)

                    if(response.error == 'Login: Account undefined') setError('Логин или почта неверны')
                    if(response.error == 'Login access denied: password incorrect') setError('Пароль неверный')

                    setDisplayError('flex')
                }
            })
            .catch(error => {
                console.error('Error fetching login:', error);
            });
    }
    
    const LoginChecker = (login) => {
        const regex = /^[a-z0-9]+$/i;
        return regex.test(login);
    }

    // Регистрация
    const handleRegister = () => {
        if(!loginRegister || !emailRegister || !nameRegister || !surnameRegister || !passwordRegister || !passwordConfirmRegister) {
            setError('Заполните все поля!')
            setDisplayError('flex')
            return
        }
        if(LoginChecker(loginRegister) == false) {
            setError('Логин не соответствует требованиям!')
            setDisplayError('flex')
            return
        }
        if(passwordRegister!=passwordConfirmRegister) {
            setError('Пароли не совпадают!')
            setDisplayError('flex')
            return
        }

        const registerData = {
            login: loginRegister,
            email: emailRegister,
            name: nameRegister,
            surname: surnameRegister,
            password: passwordRegister,
        }
        console.log(registerData);

        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(registerData)
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    fetch('http://localhost:3000/confirmCode', {
                        method: 'GET',
                        headers: {'Content-Type': 'application/json'}
                    })
                        .then(response => response.json())
                        .then(response => {
                            if(response.status == 200){
                                navigate('/confirmEmail')
                            }else{
                                if(response.error == 'Confirm email: Email error') setError('Confirm email: Email error')
                                if(response.error == 'SendEmail: Email undefined') setError('Почты не существует')
                                
                                setDisplayError('flex')
                            }
                        })
                }else{
                    console.log(`Ошибка регистрации: ${response.error}`)
                    if(response.error == 'Register email: undefined') setError('Вы не вписали почту')
                    if(response.error == 'Register email: already exists') setError('Эта почта уже используется')
                    if(response.error == 'Register login: undefined') setError('Вы не вписали логин')
                    if(response.error == 'Register login: already exists') setError('Логин уже используется')

                    setDisplayError('flex')
                }
            })
            .catch(error => {
                console.error('Error fetching register:', error);
            });
    }
    

     // Функция для изменения id при нажатии
    const handleIdChange = () => {
        if(elementIdLogin == 'test1'){
            setElementIdLogin('test2')
            setRememberMeStatus(true)
        }else{
            setElementIdLogin('test1')
            setRememberMeStatus(false)
        }
    };
    const handleIdChangeRuleAccept = () => {
        if(elementIdRA == 'test1'){
            setElementIdRA('test2')
            ruleAccept(true)
        }else{
            setElementIdRA('test1')
            ruleAccept(false)
        }
    };


    // Логин алерт
    // (e) => {setLoginRegister(e.target.value); LoginChecker(e.target.value) || e.target.value == 0 || e.target.value < 15 ? setAlertDisplay('none') : setAlertDisplay('flex')}

    const handleAlert = (e) => {
        const value = e.target.value

        setLoginRegister(value)

        if( value.length <= 15 && value.length > 0 && LoginChecker(value) ){
            setAlertDisplay('none')
        }else{
            setAlertDisplay('flex')
        }
    }

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
                    <p className="TextContentSingInDiv">Логин или почта</p>
                    <div className="PhoneNumberInput">
                        <input type="text" onChange={(e) => {setLoginLogin(e.target.value)}} placeholder="Введите логин или почту" style={{ width: '90%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px'}}/>
                    </div>
                    <p className="TextContentSingInDiv">Пароль</p>
                    <div className="PasswordInput" style={{ position: 'relative', width: '86.5%', borderRadius: '40px', height: '40px', background: 'var(--COLOR-2, #3C4245)', }}>
                        <input
                            type={passwordVisibleSignIn ? 'text' : 'password'}
                            placeholder="Введите пароль"
                            className="password-input"
                            onChange={(e) => {setPasswordLogin(e.target.value)}}
                            style={{width: '100%', borderRadius: '40px', height: '40px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px'}}/>
                        <img
                            src={passwordVisibleSignIn ? eyeIcon : eyeSlashIcon}
                            alt={passwordVisibleSignIn ? 'Hide password' : 'Show password'}
                            onClick={() => togglePasswordVisibility('signIn')}
                            style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}/>
                    </div><br />
                    <div className="HelperSingInDiv">
                        <div className="RememborInput">
                            <div className={elementIdLogin} onClick={handleIdChange}></div>
                            <span onClick={handleIdChange} style={{ cursor: 'pointer', userSelect: 'none' }}>Запомнить меня</span>
                        </div>
                        <Link to={'/forgotPassword'} className="ForgottenPassword">Забыли пароль?</Link>
                    </div>
                    <div className="SingInButBottom"><button className="SingInButBot" onClick={handleLoginIn}>Войти</button></div>
                    <div className="alert-modal" style={{ display: displayError }}>{error}</div>
                </div>



            ) : (                    
                // РЕГИСТРАЦИЯ
                <div className="RegistrDiv">
                    <div className="RegistrInputs">
                        <div className="register-alert-container">
                            <p className="TextContentRegistrDiv">Логин</p>
                            <svg style={{display: alertDisplay}} className="register-alert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                            <span className="register-alert" style={{width: '300px', fontSize: '8pt', marginTop: '10px', display: alertDisplay, userSelect: 'none'}}>Логин должен быть слитным и содержать лишь символы a-z, а так же цифры и не быть более 15 символов</span>
                        </div>
                        <input type="text" placeholder="Введите логин" onChange={ handleAlert } style={{ width: '88%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px'}}/>
                        <p className="TextContentRegistrDiv">Почта</p>
                        <input type="text" placeholder="Введите почту" onChange={(e) => {setEmailRegister(e.target.value)}} style={{ width: '88%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px'}}/>
                        <p className="TextContentRegistrDiv">Имя</p>
                        <input type="text" placeholder="Введите имя" onChange={(e) => {setNameRegister(e.target.value)}} style={{ width: '88%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px'}}/>
                        <p className="TextContentRegistrDiv">Фамилия</p>
                        <input type="text" placeholder="Введите Фамилию" onChange={(e) => {setSurnameRegister(e.target.value)}} style={{ width: '88%', borderRadius: '40px', height: '40px', color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px'}}/>
                        <p className="TextContentRegistrDiv">Пароль</p>
                        <div style={{ position: 'relative', width: '88%' }}>
                            <input
                                type={passwordVisibleRegister ? 'text' : 'password'}
                                placeholder="Придумайте пароль"
                                className="password-input"
                                onChange={(e) => {setPasswordRegister(e.target.value)}}
                                style={{width: '100%', borderRadius: '40px', height: '40px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px'}}/>
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
                                style={{width: '100%', borderRadius: '40px', height: '40px',color: 'white', background: 'var(--COLOR-2, #3C4245)', border: 'none', fontSize: '17px', paddingLeft: '15px'}}/>
                            <img
                                src={confirmPasswordVisibleRegister ? eyeIcon : eyeSlashIcon}
                                alt={confirmPasswordVisibleRegister ? 'Hide password' : 'Show password'}
                                onClick={() => togglePasswordVisibility('confirmRegister')}
                                style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}/>
                        </div>
                    </div><br />
                    <div className="CheckBoxAgreements">
                        <div className="RememborInput">
                        <div className={elementIdRA} onClick={handleIdChangeRuleAccept}></div>
                            <span onClick={handleIdChangeRuleAccept} style={{ cursor: 'pointer', userSelect: 'none' }}>Я соглашаюсь с пользовательским соглашением</span>
                        </div>
                    </div><br />
                    <div className="RegistrButBottom"><button className="RegistrButBot" onClick={handleRegister}>Создать аккаунт</button></div>
                </div>
            )}
            <div className="alert-modal" style={{ display: displayError }}>{error}</div>
        </div>
    );
};

export default Registr;
