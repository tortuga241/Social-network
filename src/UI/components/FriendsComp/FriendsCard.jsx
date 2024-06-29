import React, { useState } from "react";
import './Style/FriendsCards.css';

const FriendsCard = () => {
    const [status, setStatus] = useState(1); // Example status value

    const getStatusClass = () => {
        switch (status) {
            case 1:
                return "user-statys-frinds-1 active";
            case 2:
                return "user-statys-frinds-2 active";
            case 3:
                return "user-statys-frinds-3 active";
            case 4:
                return "user-statys-frinds-4 active";
            default:
                return "";
        }
    };

    return (
        <div className="MainDivFriendsCard">
            <div className="DopDivFriendsCard">
                <div className="UserAvatarFriendsCards">
                    <div className="userAvatarPhoto"></div>
                    <div className="UserStytus">
                        <div className={getStatusClass()}></div>
                    </div>
                </div>
                <div className="UserInfoAndButs">
                    <div className="UserNameFriendsCard">Елена Заливкина</div>
                    <div className="UserGroupFriendsCard">Заправочная станция №1</div>
                    <div className="FriendsCardBut">
                        <p className="TxtFriendsCardBut">Написать сообщение</p>
                    </div>
                </div>
            </div>
            <hr className="hrFriendsCards" />
        </div>
    );
}

export default FriendsCard;