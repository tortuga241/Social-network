import React, { useState, useEffect } from "react";
import Layouts from "../../Layouts/layout";
import MainMenuList from "../components/MainMenuList";
import FriendsCard from "../components/FriendsComp/FriendsCard.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import './Style/Friends.css';

const Friends = () => {
    const [showAll, setShowAll] = useState(false);
    const [activeButton, setActiveButton] = useState('Мои друзья');
    const [activeFriendsButton, setActiveFriendsButton] = useState('Все друзья');
    
    const [friends, setFriends] = useState([])
    const nowUser = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const [onlineValue, setOnlineValue] = useState(0)

    let onlineFriends = 0

    useEffect(() => {
        fetch(`http://localhost:3000/friends/${nowUser.login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status === 200){
                    console.log('200')
                    console.log(`-----------------------FRIENDS-----------------------`)
                    console.log(response.friends)
                    setFriends(response.friends)
                    // console.log(friends.length)
                }else{
                    console.log(`${response.error}`)
                }
            })
    }, [])

    useEffect(() => {
        console.log(friends)
        friends.forEach((friend) => {
            if(friend.status === 'online'){
                onlineFriends += 1
            }
        })
        setOnlineValue(onlineFriends)
    }, [friends])

    

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
                    {/* <div className='AddPostMainDiv'>
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
                    </div> */}
                    <div className="MainFriendsPart" style={{ marginTop: '0px' }}>
                        <div className="FriendsButs">
                            <div className="FriendsAll">
                                <button className={`FriendsButOne ${activeFriendsButton === 'Все друзья' ? 'active' : ''}`} onClick={() => handleSetActiveFriendsButton('Все друзья')}>
                                    Все друзья
                                    <div className="kolvoFriends">{ friends.length }</div>
                                </button>
                            </div>
                            <div className="FriendsOnlineOnly">
                                <button className={`FriendsButTwo ${activeFriendsButton === 'Друзья онлайн' ? 'active' : ''}`} onClick={() => handleSetActiveFriendsButton('Друзья онлайн')}>
                                    Друзья онлайн
                                    <div className="kolvoFriends">{ onlineValue }</div>
                                </button>
                            </div>
                        </div>
                        <div className="DivForFriendsComp">
                            { 
                            friends.length == 0 ?
                                <p style={{ color: 'white' }}>У вас нет друзей</p>
                            :
                            
                            showAll ? 
                            
                            friends.map((friend, index) => <FriendsCard key={index} type={'friend'} login={friend.login} nickname={friend.nickname} location={friend.location} avatarPath={friend.avatarPath} />) 
                            : 
                            friends.map((friend, index) => <FriendsCard key={index} type={'friend'} login={friend.login} nickname={friend.nickname} location={friend.location} avatarPath={friend.avatarPath} />).slice(0, 5)
                            
                            }
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
                        <button className={`ButPostNews ${activeButton === 'Мои друзья' ? 'active' : ''}`} onClick={() => {navigate(`/friends`); window.location.reload()}} style={{ cursor: 'pointer' }}>Мои друзья</button>
                    </div>
                    <div className="PunktForBut">
                        <button className={`ButSearchNews ${activeButton === 'Заявки в друзья' ? 'active' : ''}`} onClick={() => {navigate(`/friends/requests`); window.location.reload()}} style={{ cursor: 'pointer' }}>Заявки в друзья</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Friends;