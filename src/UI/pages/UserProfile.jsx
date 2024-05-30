import React, { useState } from "react";
import Layout from '../../Layouts/layout.jsx';
import MainMenu from "../components/MainMenuList.jsx";
import ProfileFreindsComp from "../components/UserProfileComponents/ProfileFreindsComp.jsx";
import ProfileSubComp from "../components/UserProfileComponents/ProfileSubComp.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic } from '@fortawesome/free-solid-svg-icons';
import './Style/Profile.css';

const UserProfile = () => {
    const [activeButton, setActiveButton] = useState("Фото");
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState("");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handleTextareaChange = (e) => {
        setText(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handlePost = () => {
        // Handle the post submission logic
    };

    return (
        <div className="MainDivUserProfile">
            <Layout />
            <div className="MainContentPage">
                <div className="DivForMain  ">
                    <MainMenu />
                </div>
                <div className="ProfileMore">
                    <div className="MainDivProfileInfo">
                        <div className="backgroundImageDiv"></div>
                        <div className="UserInfoDiv">
                            <div className="SettingButDiv">
                                <button className="SettingBut">Настройки</button>
                            </div>
                            <div className="MoreInfoDiv">
                                <button className="MoreInfoBut">Подробнее</button>
                            </div>
                            <div className="UserProfileInfo">
                                <div className="UserAvatar">
                                    <div className="UserState"></div>
                                </div><br />
                                <div className="UserName">Александр Александрович</div>
                                <span style={{ color: 'white', fontSize: '13px',}}>...</span>
                                <div className="UserCity">Талдыкорган</div>
                            </div>
                            <div className="EditUserProfile">
                                <button className="EditBut">Редактировать профиль</button>
                            </div>
                            <div className="MoreDiv">
                                <button className="MoreBut">Ещё</button>
                            </div>
                        </div>
                    </div>
                    <div className="MainDivContainer">
                        <div className="LeftSide">
                            <div className="FriendsInfo">
                            <ProfileFreindsComp />
                            <ProfileFreindsComp />
                            <ProfileFreindsComp />
                            <ProfileFreindsComp />
                            <ProfileFreindsComp />
                            </div>
                            <div className="Buts">
                                <button className="But1">Все друзья<div className="kolvoFriend">241</div></button>
                                <button className="But2">Ещё</button>
                            </div>
                        </div>
                        <div className="RightSide">
                            <div className="FriendsInfo">
                                <ProfileFreindsComp />
                                <ProfileFreindsComp />
                                <ProfileFreindsComp />
                                <ProfileFreindsComp />
                                <ProfileFreindsComp />
                                </div>
                            <div className="Buts">
                                <button className="But3">Онлайн</button>
                                <button className="But2">Ещё</button>
                            </div>
                        </div>
                    </div>
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
                    <div className="MainDivSubscrideProfile">
                        <div className="LeftSide">
                            <div className="Butos">
                                <button className="ButSub">Подписки<div className="SubButKolvo">5</div></button>
                            </div>
                            <div className="SubList">
                                <ProfileSubComp />
                                <ProfileSubComp />
                            </div>
                        </div>
                    </div>
                    <div className="addContent">
                        <div className="form">
                            <div className="add-post" id="add-post">
                                <div className="avatar" id="avatar"></div>
                                <div className="name" id="name"></div>
                                <div className="post-img" id="post-img"></div>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    {imagePreview && <img id="image-preview" src={imagePreview} alt="Preview" style={{ display: "block" }} />}
                                    <textarea
                                        id="expandingTextarea"
                                        rows="1"
                                        placeholder="Что у вас нового?"
                                        value={text}
                                        onChange={handleTextareaChange}
                                    ></textarea>
                                    <input
                                        type="file"
                                        id="file-input"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />
                                     <label htmlFor="file-input" id="file-label">
                                        <FontAwesomeIcon icon={faImage} style={{color: '#ffffff', width: '20px', height: '25px'}} />
                                    </label>
                                    <input
                                        type="file"
                                        id="file-input-mp3"
                                        accept="audio/mp3"
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="file-input-mp3" id="file-label-mp3">
                                        <FontAwesomeIcon icon={faMusic} style={{color: '#ffffff', width: '20px', height: '25px'}} /> 
                                    </label>
                                    <button id="button-output" type="button" onClick={handlePost}>
                                        Опубликовать
                                    </button>
                                </form>
                            </div>
                        </div>
                        <input type="file" id="image-input" accept="image/*" style={{ display: "none" }} />
                        <div id="image-container"></div> {/* Контейнер для отображения измененного изображения */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;