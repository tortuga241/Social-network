import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Style/FriendsCards.css';

const FriendsCard = ({ nickname, location, login, avatarPath, type }) => {
    const [status, setStatus] = useState(1); // Example status value
    const navigate = useNavigate()

    const staticPath = '../../../server/static'
    const nowUser = JSON.parse(localStorage.getItem('user'))

    const [onlineStyle, setOnlineStyle] = useState('usOffline')

    // const getStatusClass = () => {
    //     switch (status) {
    //         case 1:
    //             return "user-statys-frinds-1 active";
    //         case 2:
    //             return "user-statys-frinds-2 active";
    //         case 3:
    //             return "user-statys-frinds-3 active";
    //         case 4:
    //             return "user-statys-frinds-4 active";
    //         default:
    //             return "";
    //     }
    // };

    useEffect(()=>{
        fetch(`http://localhost:3000/account/findById/${login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    if(response.user.status == 'online'){
                        setOnlineStyle('usOnline')
                    }else{
                        setOnlineStyle('usOffline')
                    }
                }
            })
    }, [])

    const handleAccept = () => {
        fetch(`http://localhost:3000/friends/add`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: nowUser.login,
                friend: login
            })
        })
            .then(window.location.reload())
    }
    const handleDeny = () => {
        fetch(`http://localhost:3000/friends/remove`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: login,
                friend: nowUser.login
            })
        })
            .then(window.location.reload())
    }

    return (
        <div className="MainDivFriendsCard">
            <div className="DopDivFriendsCard">
                <div className="UserAvatarFriendsCards" style={{ backgroundImage: `url(${staticPath}/${avatarPath})` }}>
                    <div className="userAvatarPhoto" ></div>
                    <div className="UserStytus">
                        <div className={onlineStyle}></div>
                    </div>
                </div>
                <div className="UserInfoAndButs">
                    <div className="UserNameFriendsCard" onClick={() => {navigate(`/profile/${login}`); window.location.reload()}} style={{ cursor: 'pointer' }}>{ nickname }</div>
                    <div className="UserGroupFriendsCard">{ location }</div>
                    <div className="FriendsCardBut">
                        { type == 'friend' ?
                        <p className="TxtFriendsCardBut" style={{ cursor: 'pointer' }}>Написать сообщение</p>
                        :
                        <div />
                        }
                    </div>
                </div>
                { type == 'request' ?
                    <div>
                        <button onClick={handleAccept}>Принять</button>
                        <button onClick={handleDeny}>Отклонить</button>
                    </div>
                    :
                    <div />
                }
            </div>
            <hr className="hrFriendsCards" />
        </div>
    );
}

export default FriendsCard;