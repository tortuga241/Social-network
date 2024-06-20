import React from "react";
import './Style/ProfileFriendsOnline.css'; // Предполагаем, что у вас есть этот файл

const ProfileFriendsOnline = () => {
    return (
        <div className="MainDivContainer">
            <div className="LeftSide">
                <div className="FriendsInfo"></div>
                <div className="Buts">
                    <button className="But1">Все друзья<div className="kolvoFriend">241</div></button>
                    <button className="But2">Ещё</button>
                </div>
            </div>
            <div className="RightSide">
                <div className="FriendsInfo"></div>
                <div className="Buts">
                    <button className="But3">Онлайн</button>
                    <button className="But2">Ещё</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileFriendsOnline;