import React, { useState } from "react";
import Layout from '../../Layouts/layout.jsx';
import MainMenu from "../components/MainMenuList.jsx";
import ProfileFreindsComp from "../components/UserProfileComponents/ProfileFreindsComp.jsx";
import ProfileSubComp from "../components/UserProfileComponents/ProfileSubComp.jsx";
import AddPostProfile from "../components/AddPostProfile.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic, faPencil, faGear } from '@fortawesome/free-solid-svg-icons';
import './Style/Profile.css';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

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
                <div className="DivForMain">
                    <MainMenu />
                </div>
                <div className="ProfileMore" style={{width: '850px'}}>
                    <div className="MainDivProfileInfo">
                        <div className="backgroundImageDiv"></div>
                        <div className="UserInfoDiv">
                            <div className="SettingButDiv">
                                <button className="SettingBut">Настройки <FontAwesomeIcon icon={faGear} className="IconProfBut" /></button>
                            </div>

                            <div className="UserProfileInfo">
                                <div className="UserAvatar">
                                    <div className="UserState"></div>
                                </div><br />
                                <div className="UserNameProfile">Александр Александрович</div>
                                <span style={{ color: 'white', fontSize: '13px',}}>...</span>
                                <div className="UserCity">Талдыкорган</div>
                            </div>
                            <div className="EditUserProfile">
                                <button className="EditBut">Редактировать профиль <FontAwesomeIcon icon={faPencil} className="IconProfBut"/></button>
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
                                </div>
                            <div className="Buts">
                                <button className="But1">Онлайн<div className="kolvoFriend">241</div></button>
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
                    <AddPostProfile />
                </div>
            </div>
        </div>
    );
}

export default UserProfile;