import React, { useState, useEffect } from "react";
import Layouts from "../../Layouts/layout";
import MainMenuList from "../components/MainMenuList";
import FriendsCard from "../components/FriendsComp/FriendsCard.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import './Style/Friends.css';

const Requests = () => {
    const [showAll, setShowAll] = useState(false);
    const [activeButton, setActiveButton] = useState('Мои друзья');
    
    const [requests, setRequests] = useState([])
    const nowUser = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3000/friends/requests/${nowUser.login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status === 200){
                    console.log('200')
                    console.log(`-----------------------FRIENDS-----------------------`)
                    console.log(response.friends)
                    setRequests(response.friends)
                    // console.log(friends.length)
                }else{
                    console.log(`${response.error}`)
                }
            })
    }, [])

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
                    <div className="MainFriendsPart" style={{ marginTop: '0px' }}>
                        <div className="DivForFriendsComp">
                            {

                            requests.length == 0 ?
                            
                            <p style={{ color: 'white' }}>У вас нет заявок</p>

                            :
                                
                            showAll ? 

                            requests.map((friend, index) => <FriendsCard key={index} type={'request'} login={friend.login} nickname={friend.nickname} location={friend.location} avatarPath={friend.avatarPath} />) 
                            : 
                            requests.map((friend, index) => <FriendsCard key={index} type={'request'} login={friend.login} nickname={friend.nickname} location={friend.location} avatarPath={friend.avatarPath} />).slice(0, 5)
                            
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

export default Requests;