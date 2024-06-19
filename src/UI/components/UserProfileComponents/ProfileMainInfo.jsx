import React from "react";
import './Style/ProfileMainInfo.css';

const ProfileMainInfo = () => {
    return (
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
                    <div className="UserName">Декурвина Деблядор</div>
                    <span style={{ color: 'white'}}>...</span>
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
    )
}

export default ProfileMainInfo;