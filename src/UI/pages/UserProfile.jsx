import React from "react";
import Layout from '../../Layouts/layout.jsx'
import MainMenu from "../components/MainMenuList.jsx";
import ProfilePhotoContent from "../components/UserProfileComponents/ProfilePhotoContent.jsx";
import ProfileMainInfo from "../components/UserProfileComponents/ProfileMainInfo.jsx";
import ProfileFriendsOnline from "../components/UserProfileComponents/ProfileFriendsOnline.jsx";
import ProfileSubscride from "../components/UserProfileComponents/ProfileSubscride.jsx";
import ProfileAddPost from "../components/UserProfileComponents/ProfileAddPost.jsx";
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
                <ProfileSubscride />
                <ProfileAddPost />
            </div>
        </div>
    )
}

export default UserProfile;