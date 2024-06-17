import React, { useState, useEffect } from "react";
import Layout from '../../Layouts/layout.jsx';
import MainMenu from "../components/MainMenuList.jsx";
import ProfileFreindsComp from "../components/UserProfileComponents/ProfileFreindsComp.jsx";
import ProfileSubComp from "../components/UserProfileComponents/ProfileSubComp.jsx";
import AddPostProfile from "../components/AddPostProfile.jsx";
import PostTextOnly from "../components/PostComps/PostTextOnly.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostPhotoTxt from "../components/PostComps/PostPhotoTxt.jsx";
import { faImage, faMusic, faPencil, faGear } from '@fortawesome/free-solid-svg-icons';
import ModalWindow from "../components/UserProfileComponents/ModalWindow.jsx";
import './Style/Profile.css';
import { useParams, useNavigate } from "react-router-dom";

const UserProfile = () => {
    const [activeButton, setActiveButton] = useState("Фото");
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

    const staticPath = '../../../server/static'

    const nowUser = JSON.parse(localStorage.getItem('user'))

    const [onlineValue, setOnlineValue] = useState(0)
    let index2 = 0
    let onlineFriends = 0

    // ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
    const { login } = useParams()

    const [userName, setUserName] = useState('Loading...')
    const [description, setDescription] = useState('Loading...')
    const [location, setLocation] = useState('Loading...')
    const [avatarPath, setAvatarPath] = useState(`${staticPath}/standartAvatar.jpg`)
    const [backgroundPath, setBackgroundPath] = useState('')
    const [friends, setFriends] = useState([])
    const [posts, setPosts] = useState([])

    // Запросы
    useEffect(() => {
        fetch(`http://localhost:3000/account/findById/${login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    console.log(response.user)
                    setUserName(response.user.nickname)
                    setDescription(response.user.description)
                    setLocation(response.user.location)
                    setAvatarPath(`${staticPath}/${response.user.avatarPath}`)
                    setBackgroundPath(`${staticPath}/${response.user.backgroundPath}`)
                }else{
                    console.log(`${response.error}`)
                }
            })
    }, [login, staticPath])
    
    useEffect(() => {
        fetch(`http://localhost:3000/friends/${login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    console.log(response.friends)
                    setFriends(response.friends)
                    // console.log(friends.length)
                }else{
                    console.log(`${response.error}`)
                }
            })

    
    }, [])

    useEffect(()=>{
        console.log(friends)
        
    }, [friends])

    useEffect(() => {
        fetch(`http://localhost:3000/post/findAuthor/${login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    console.log(response.posts)
                    setPosts(response.posts)
                }else{
                    console.log(`Error: ${response.error}`)
                }
            })

    }, [])

    // Функции

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handleTextareaChange = (e) => {
        setText(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handlePost = () => {
        // Handle the post submission logic
    };

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    

    useEffect(() => {
        friends.map((friend)=>{
            if(friend.status == 'online'){
                onlineFriends+=1
            }
        })
        setOnlineValue(onlineFriends)
    }, [friends])


    return (
        <div className="MainDivUserProfile">
            <Layout />
            <div className="MainContentPage">
                <div className="DivForMain">
                    <MainMenu />
                </div>
                <div className="ProfileMore" style={{ width: '850px' }}>
                    <div className="MainDivProfileInfo">
                        <div className="backgroundImageDiv" style={{ backgroundImage: `url(${backgroundPath})` }}></div>
                        <div className="UserInfoDiv">
                            { nowUser.login == login ? 
                                <div className="SettingButDiv">
                                    <button className="SettingBut">Настройки <FontAwesomeIcon icon={faGear} className="IconProfBut" /></button>
                                </div>
                                :
                                <div />
                            }
                            <div className="UserProfileInfo">
                                <div className="UserAvatar" style={{ backgroundImage: `url(${avatarPath})` }}>
                                    <div className="UserState"></div>
                                </div><br />
                                <div className="UserNameProfile">{ userName }</div>
                                <div className="UserCity">{ location }</div>
                                <div className='profileDescription'>{ description }</div>
                            </div>
                            { nowUser.login == login ? 
                                <div className="EditUserProfile">
                                    <button className="EditBut" onClick={handleOpenEditModal}>Редактировать профиль <FontAwesomeIcon icon={faPencil} className="IconProfBut" /></button>
                                </div>
                                : 
                                <div />
                            }
                        </div>
                    </div>
                    <div className="MainDivContainer">
                        <div className="LeftSide">
                            <div className="FriendsInfo">
                                {friends.map((item, index) => {
                                    if(index > 3){
                                        return
                                    }
                                    return (
                                        <ProfileFreindsComp avatarPath={friends[index].avatarPath} nickname={friends[index].nickname} friendLogin={friends[index].login}/>
                                    )
                                })}
                            </div>
                            <div className="Buts">
                                <button className="But1">Все друзья<div className="kolvoFriend">{ friends.length }</div></button>
                                <button className="But2">Ещё</button>
                            </div>
                        </div>
                        <div className="RightSide">
                            <div className="FriendsInfo">
                                {friends.map((item, index) => {
                                    if(index2 > 3){
                                        return
                                    }
                                    if(friends[index].status == 'online'){
                                        index2 = index2+1
                                        return (
                                            <ProfileFreindsComp avatarPath={friends[index].avatarPath} nickname={friends[index].nickname} friendLogin={friends[index].login}/>
                                        )
                                    }
                                })}
                            </div>
                            <div className="Buts">
                                <button className="But1">Онлайн<div className="kolvoFriend">{ onlineValue }</div></button>
                                <button className="But2">Ещё</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="MainDivProfilePhotoContent">
                        <div className="DivPhoto">
                            <div className="mainPhoto"></div>
                            <div className="miniPhoto">
                                <div className="photos"></div>
                                <div className="photos"></div>
                                <div className="photos"></div>
                                <div className="photos"></div>
                                <div className="photos"></div>
                                <div className="photos"></div>
                            </div>
                        </div>
                        <div className="FilterPhoto">
                            <div className="ButPhotoContent">
                                <button
                                    className={`photoBut1 ${activeButton === "Фото" ? "active" : ""}`}
                                    onClick={() => handleButtonClick("Фото")}
                                >
                                    Фото
                                </button>
                            </div>
                            <div className="ButPhotoContent">
                                <button
                                    className={`photoBut1 ${activeButton === "Альбом" ? "active" : ""}`}
                                    onClick={() => handleButtonClick("Альбом")}
                                >
                                    Альбом
                                </button>
                            </div>
                            <div className="ButPhotoContent">
                                <button
                                    className={`photoBut1 ${activeButton === "Музыка" ? "active" : ""}`}
                                    onClick={() => handleButtonClick("Музыка")}
                                >
                                    Музыка
                                </button>
                            </div>
                            <div className="ButPhotoContent">
                                <button
                                    className={`photoBut1 ${activeButton === "Записи" ? "active" : ""}`}
                                    onClick={() => handleButtonClick("Записи")}
                                >
                                    Записи
                                </button>
                            </div>
                            <div className="ButPhotoContent">
                                <button
                                    className={`photoBut2 ${activeButton === "Показать всё" ? "active" : ""}`}
                                    onClick={() => handleButtonClick("Показать всё")}
                                >
                                    Показать всё
                                </button>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="MainDivSubscrideProfile">
                        <div className="LeftSide">
                            <div className="Butos">
                                <button className="ButSub">Подписки<div className="SubButKolvo">5</div></button>
                            </div>
                            <div className="SubList">
                                <ProfileSubComp />
                                <ProfileSubComp />
                            </div>
                        </div>
                    </div> */}
                    <AddPostProfile accOwner={ nowUser.login == login ? true : false } login={ login } avaPath={ avatarPath } />
                    { posts.length > 0 ? 
                        posts
                            .slice()
                            .reverse()
                            .map( (post) => { return( <PostTextOnly postId={ post.id } login={login} nowUser={nowUser} /> ) })
                    :
                        <p style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '50px', fontSize: '15pt' }}>У пользователя нет постов</p>
                    }
                    {/* <PostPhotoTxt /> */}
                </div>
            </div>
            <ModalWindow isOpen={isEditModalOpen} onClose={handleCloseEditModal} />
            <h1 style={{ position: 'fixed', bottom: '0px', left: '0px', color: 'rgba(122, 222, 240, 0.3)' }}>Моральная поддержка by Zufics69</h1>
        </div>
    );
}

export default UserProfile;