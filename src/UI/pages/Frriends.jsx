import React, { useState } from "react";
import Layouts from "../../Layouts/layout";
import MainMenuList from "../components/MainMenuList";
import FriendsCard from "../components/FriendsComp/FriendsCard.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import './Style/Friends.css';

const Friends = () => {
    const [showAll, setShowAll] = useState(false);
    const [activeButton, setActiveButton] = useState('Мои друзья');
    const [activeFriendsButton, setActiveFriendsButton] = useState('Все друзья');

    const friendsList = Array(18).fill().map((_, index) => <FriendsCard key={index} />);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    const handleSetActiveButton = (button) => {
        setActiveButton(button);
    };

    const handleSetActiveFriendsButton = (button) => {
        setActiveFriendsButton(button);
    };

    return (
        <div className="MainDivNewsPage">
            <Layouts />
            <div className="MainContentPage">
                <div className="DivForMain" style={{ width: '185px' }}>
                    <MainMenuList />
                </div>
                <div className="NewsPageMore">
                    <div className='AddPostMainDiv'>
                        <div className='AddPost' style={{ borderRadius: '10px' }}>
                            <div className='SearchIconFriends'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="SearchIconIcon" />
                            </div>
                            <div className='AddPostInput'>
                                <div className='InputWithAvatarField'>
                                    <input type="text" className="inputFriends" placeholder="Поиск друзей" />
                                </div>
                            </div>
                            <div className='AddPostIconsCom'>
                                <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff", width: '20px', height: '20px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="MainFriendsPart">
                        <div className="FriendsButs">
                            <div className="FriendsAll">
                                <button className={`FriendsButOne ${activeFriendsButton === 'Все друзья' ? 'active' : ''}`} onClick={() => handleSetActiveFriendsButton('Все друзья')}>
                                    Все друзья
                                    <div className="kolvoFriends">241</div>
                                </button>
                            </div>
                            <div className="FriendsOnlineOnly">
                                <button className={`FriendsButTwo ${activeFriendsButton === 'Друзья онлайн' ? 'active' : ''}`} onClick={() => handleSetActiveFriendsButton('Друзья онлайн')}>
                                    Друзья онлайн
                                    <div className="kolvoFriends">50</div>
                                </button>
                            </div>
                        </div>
                        <div className="DivForFriendsComp">
                            {showAll ? friendsList : friendsList.slice(0, 5)}
                        </div>
                    </div>
                    <div className="ButBottomGruz">
                        <button className="ButGruz" onClick={handleToggleShowAll}>
                            {showAll ? "Скрыть" : "Весь список"}
                        </button>
                    </div>
                </div>
                <div className='RightFilterDivFriends'>
                    <div className="PunktForBut">
                        <button className={`ButPostNews ${activeButton === 'Мои друзья' ? 'active' : ''}`} onClick={() => handleSetActiveButton('Мои друзья')}>Мои друзья</button>
                    </div>
                    <div className="PunktForBut">
                        <button className={`ButSearchNews ${activeButton === 'Заявки в друзья' ? 'active' : ''}`} onClick={() => handleSetActiveButton('Заявки в друзья')}>Заявки в друзья</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Friends;