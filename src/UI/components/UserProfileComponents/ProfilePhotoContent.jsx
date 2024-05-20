import React, { useState } from "react";
import "./Style/ProfilePhotoContent.css";

const ProfilePhotoContent = () => {
    const [activeButton, setActiveButton] = useState("Фото");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="MainDivProfilePhotoContent">
            <div className="DivPhoto">
                <div className="mainPhoto"></div>
                <div className="miniPhoto">
                    <div className="photos"></div>
                    <div className="photos"></div>
                    <div className="photos"></div>
                    <div className="photos"></div>
                    <div className="photos"></div>
                    <div className="photos"></div>
                </div>
            </div>
            <div className="FilterPhoto">
                <div className="ButPhotoContent">
                    <button
                        className={`photoBut1 ${activeButton === "Фото" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Фото")}
                    >
                        Фото
                    </button>
                </div>
                <div className="ButPhotoContent">
                    <button
                        className={`photoBut1 ${activeButton === "Альбом" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Альбом")}
                    >
                        Альбом
                    </button>
                </div>
                <div className="ButPhotoContent">
                    <button
                        className={`photoBut1 ${activeButton === "Музыка" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Музыка")}
                    >
                        Музыка
                    </button>
                </div>
                <div className="ButPhotoContent">
                    <button
                        className={`photoBut1 ${activeButton === "Записи" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Записи")}
                    >
                        Записи
                    </button>
                </div>
                <div className="ButPhotoContent">
                    <button
                        className={`photoBut2 ${activeButton === "Показать всё" ? "active" : ""}`}
                        onClick={() => handleButtonClick("Показать всё")}
                    >
                        Показать всё
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePhotoContent;