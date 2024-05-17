import React from "react";
import './Style/MainMenu.css';

const MainMenu = () => {
    return (
        <div className="MainDivMainMenu">
            <div className="FirstPartMenu">
                <div className="TextContentMenu">
                    <p className="TextMenu">Профиль</p>
                    <p className="TextMenu">Новости</p>
                    <p className="TextMenu">Мессенджер</p>
                    <p className="TextMenu">Друзья</p>
                    <p className="TextMenu">Сообщества</p>
                    <p className="TextMenu">Фотографии</p>
                    <p className="TextMenu">Музыка</p>
                    <p className="TextMenu">Видео</p>
                    <p className="TextMenu">Стикеры</p>
                </div>
            </div><br />
            <div className="SecondPartMenu">
                <div className="TextContentMenu">
                    <p className="TextMenu">Помощь</p>
                    <p className="TextMenu">Авторы</p>
                    <p className="TextMenu">Донат</p>  
                    <p className="TextMenu">Настройки</p>
                </div>
            </div>
        </div>
    )
};

export default MainMenu;