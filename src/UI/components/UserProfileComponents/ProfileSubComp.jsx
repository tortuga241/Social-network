import React from "react";
import './Style/ProfileSubComp.css';

const ProfileSubComp = () => {
    return(
        <div className="MainDivCompSub">
            <div className="AvatarGroup"></div>
            <div className="TextContentSub">
                <div className="TitleGroup">RacoonTeam</div>
                <div className="TypeGroup">Команда разработчиков</div>
                <div className="KolvoSubov">5
                    <div className="KolvosubTXT">подписчиков</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSubComp;