import React from "react";
import Layout from '../../Layouts/layout.jsx'
import MainMenu from "../components/MainMenuList.jsx";
import ProfilePhotoContent from "../components/UserProfileComponents/ProfilePhotoContent.jsx";
import ProfileMainInfo from "../components/UserProfileComponents/ProfileMainInfo.jsx";
import ProfileFriendsOnline from "../components/UserProfileComponents/ProfileFriendsOnline.jsx";
import './Style/Profile.css';

const UserProfile = () => {
    return (
        <div className="MainDivUserProfile">
            <Layout />
            <div className="DivForMain">
                <MainMenu />
                <ProfileMainInfo />
            </div>
            <div className="ProfileMore">
                <ProfileFriendsOnline />
                <ProfilePhotoContent />
            </div>
        </div>
    )
}

export default UserProfile;