import React from "react";
import './Style/ProfileSub.css';
import ProfileSubComp from "./ProfileSubComp";

const ProfileSubscride = () => {
    return (
        <div className="MainDivSubscrideProfile">
            <div className="LeftSide">
                <div className="Butos">
                    <button className="ButSub">Подписки<div className="SubButKolvo">5</div></button>
                </div>
                <div className="SubList">
                    <ProfileSubComp />
                    <ProfileSubComp />
                </div>
            </div>
        </div>
    )
}

export default ProfileSubscride;