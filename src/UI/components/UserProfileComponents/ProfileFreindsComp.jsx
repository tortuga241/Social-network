import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import './Style/ProfileFriendsComp.css';

const ProfileFriendsComp = ({avatarPath, nickname, friendLogin}) => {
    const staticPath = '../../../../server/static'
    const navigate = useNavigate()

    return (
        <div style={{ userSelect: 'none', cursor: 'pointer' }} className="MainDivProfileFriendsComp" onClick={() => {navigate(`/profile/${friendLogin}`); window.location.reload()}}>
            <div className="AvatarFriends" style={{ backgroundImage: `url(${staticPath}/${avatarPath})` }}></div>
            <div className="FriendsName">{ nickname }</div>
        </div>
    );
}

export default ProfileFriendsComp;