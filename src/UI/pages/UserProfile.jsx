import React from "react";
import Layout from '../../Layouts/layout.jsx'
import MainMenu from "../components/MainMenuList.jsx";
import ProfileMainInfo from "../components/UserProfileComponents/ProfileMainInfo.jsx";
import './Style/Profile.css';

const UserProfile = () => {
    return (
        <div className="MainDivUserProfile">
            <Layout />
            <MainMenu />
            <ProfileMainInfo />
        </div>
    )
}

export default UserProfile;