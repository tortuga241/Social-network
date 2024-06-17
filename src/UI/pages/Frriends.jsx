import React from "react";
import Layouts from "../../Layouts/layout";
import MainMenuList from "../components/MainMenuList";
import './Style/Friends.css';

const Friends = () => {
    return(
        <div className="MainDivNewsPage">
            <Layouts />
            <div className="MainContentPage">
                <div className="DivForMain" style={{width: '250px'}}>
                    <MainMenuList />
                </div>
                <div className="NewsPageMore">
                    {/* Поисковая строка */}
                    <div className='AddPostMainDiv'>
                        <div className='AddPost'>
                            <div className='UserAvatarAddPost'></div>
                            <div className='AddPostInput'>
                                <div className='InputWithAvatarField'>
                                <p>Что у вас нового?</p>
                                </div>
                            </div>
                        <div className='AddPostIcons'>
                            <p>Параметры</p>
                        </div>
                    </div>
                    </div>
                    {/* Часть страницы с друзьями */}
                    <div className="MainFriendsPart">
                        <div className="FriendsBut"></div>
                        <div className="DivForFriendsComp">
                            {/* Сюда компоненты с друзьями */}
                        </div>
                    </div>
                </div>
                <div className='RightFilterDivFriends'>
                    <div className='PunktForBut'> <button className='ButPostNews'>Мои друзья</button></div>
                    <div className='PunktForBut'> <button className='ButPhotoNews'>Дни рождения</button></div>
                    <div className='PunktForBut'> <button className='ButSearchNews'>Заявки в друзья</button></div>
                    <div className='PunktForBut'> <button className='ButSearchNews'>Найти друзей</button></div>
                </div>
            </div>
        </div>
    )
}

export default Friends;