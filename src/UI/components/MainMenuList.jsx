import React, { useState } from "react";
import './Style/MainMenu.css';

const MainMenu = () => {
    const [activeMenuItem, setActiveMenuItem] = useState("Профиль");

    const handleMenuItemClick = (itemName) => {
        setActiveMenuItem(itemName);
    };

    return (
        <div className="MainDivMainMenu">
            <div className="FirstPartMenu">
                <div className="TextContentMenu">
                    <p className={`TextMenu ${activeMenuItem === "Профиль" ? "active" : ""}`} onClick={() => handleMenuItemClick("Профиль")}>Профиль</p>
                    <p className={`TextMenu ${activeMenuItem === "Новости" ? "active" : ""}`} onClick={() => handleMenuItemClick("Новости")}>Новости</p>
                    <p className={`TextMenu ${activeMenuItem === "Мессенджер" ? "active" : ""}`} onClick={() => handleMenuItemClick("Мессенджер")}>Мессенджер</p>
                    <p className={`TextMenu ${activeMenuItem === "Друзья" ? "active" : ""}`} onClick={() => handleMenuItemClick("Друзья")}>Друзья</p>
                    <p className={`TextMenu ${activeMenuItem === "Сообщества" ? "active" : ""}`} onClick={() => handleMenuItemClick("Сообщества")}>Сообщества</p>
                    <p className={`TextMenu ${activeMenuItem === "Фотографии" ? "active" : ""}`} onClick={() => handleMenuItemClick("Фотографии")}>Фотографии</p>
                    <p className={`TextMenu ${activeMenuItem === "Музыка" ? "active" : ""}`} onClick={() => handleMenuItemClick("Музыка")}>Музыка</p>
                    <p className={`TextMenu ${activeMenuItem === "Видео" ? "active" : ""}`} onClick={() => handleMenuItemClick("Видео")}>Видео</p>
                    <p className={`TextMenu ${activeMenuItem === "Стикеры" ? "active" : ""}`} onClick={() => handleMenuItemClick("Стикеры")}>Стикеры</p>
                </div>
            </div><br />
            <div className="SecondPartMenu">
                <div className="TextContentMenu">
                    <p className={`TextMenu ${activeMenuItem === "Помощь" ? "active" : ""}`} onClick={() => handleMenuItemClick("Помощь")}>Помощь</p>
                    <p className={`TextMenu ${activeMenuItem === "Авторы" ? "active" : ""}`} onClick={() => handleMenuItemClick("Авторы")}>Авторы</p>
                    <p className={`TextMenu ${activeMenuItem === "Донат" ? "active" : ""}`} onClick={() => handleMenuItemClick("Донат")}>Донат</p>  
                    <p className={`TextMenu ${activeMenuItem === "Настройки" ? "active" : ""}`} onClick={() => handleMenuItemClick("Настройки")}>Настройки</p>
                </div>
            </div>
        </div>
    )
};

export default MainMenu;