import React from "react";
import './Style/ProfileMainInfo.css';

const ProfileMainInfo = () => {
    return (
        <div className="MainDivProfileInfo">
            <div className="backgroundImageDiv"></div>
            <div className="UserInfoDiv">
                <div className="SettingButDiv">
                    <button className="SettingBut"></button>
                </div>
                <div className="MoreInfoDiv">
                    <button className="MoreInfoBut"></button>
                </div>
                <div className="UserProfileInfo">
                    <div className="UserAvatar"></div>
                    <div className="UserName"></div>
                    ...
                    <div className="UserCity"></div>
                </div>
                <div className="EditUserProfile">
                    <button className="EditBut"></button>
                </div>
                <div className="MoreDiv">
                    <button className="MoreBut"></button>
                </div>
            </div>
        </div>
    )
}

export default ProfileMainInfo;