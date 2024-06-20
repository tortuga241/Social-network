import React, { useState } from 'react';
import Layouts from '../../Layouts/layout.jsx';
import MainMenuList from '../components/MainMenuList.jsx';
// import AddPost from '../components/AddPost.jsx';
// import HistoryCompCurcl from '../components/NewsPageComponents/HistoryCompCurcl.jsx';
import PostTextOnly from '../components/PostComps/PostTextOnly.jsx';
import PostPhotoTxt from '../components/PostComps/PostPhotoTxt.jsx';
import './Style/NewsPage.css';
import { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const NewsPage = () => {
    const [text, setText] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [activeButton, setActiveButton] = useState('Все публикации');


    const [login, setLogin] = useState(null)
    const [posts, setPosts] = useState([])
    const nowUser = JSON.parse(localStorage.getItem('user'))

    const handleTextareaChange = (e) => {
        setText(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePost = () => {
        // Логика публикации поста
        console.log('Post published:', text, imagePreview);
    };

    const handleFilterMy = () => {
        fetch(`http://localhost:3000/post/`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    setPosts(response.posts.filter(post => post.author == nowUser.login))
                }else{
                    console.log(`${response.error}`)
                }
            })
        // const myPosts = posts.filter(post => post.author == nowUser.login)
        // setPosts(myPosts)
    };
    const handleFilterAll = () => {
        fetch(`http://localhost:3000/post/`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    setPosts(response.posts)
                }else{
                    console.log(`${response.error}`)
                }
            })
    };
    const handleFilterFriends = () => {
        fetch(`http://localhost:3000/friends/${nowUser.login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    response.friends.map((friend)=>{
                        fetch(`http://localhost:3000/posts/${nowUser.login}`, {
                            method: 'GET',
                            headers: {'Content-Type': 'application/json'},
                        })
                            .then(response => response.json())
                            .then(response => {
                                if(response.status == 200){
                                    console.log('200')
                                    
                                }else{
                                    console.log(`${response.error}`)
                                }
                            })
                    })
                }else{
                    console.log(`${response.error}`)
                }
            })
    };

    useEffect(() => {
        fetch(`http://localhost:3000/post/`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    setPosts(response.posts)
                }else{
                    console.log(`${response.error}`)
                }
            })
    }, [])

    return (
        <div className="MainDivNewsPage">
            <Layouts />
            <div className="MainContentPage">
                <div className="DivForMain" style={{width: '185px'}}>
                    <MainMenuList />
                </div>
                <div className="NewsPageMore">
                {/* Может быть в скором времни */}
                    {/* <AddPost /> */}
                    {/* Истории (Сторис) */}
                    {/* <div className='HistoryDiv'>
                        <div className="MainDivHistoryComp2">
                            <div className="Avatar2">

                                <FontAwesomeIcon icon={faCirclePlus} className='IconsOne'/>
                            </div>
                            <div className="UserName2">Моя история</div>
                        </div>
                        <HistoryCompCurcl />
                        <HistoryCompCurcl />
                        <HistoryCompCurcl />
                        <HistoryCompCurcl />
                        <HistoryCompCurcl />
                    </div> */}
                    <div className='PostsNewsPage'>
                       {/* <PostPhotoTxt />
                        <PostTextOnly />
                        <PostPhotoTxt />
                        <PostTextOnly /> */}
                        { posts.length > 0 ? 
                        posts
                            .slice()
                            .reverse()
                            .map( (post) => { if(post.repostPostId != null ){ return }; return( <PostTextOnly postId={ post.id } login={ post.author } nowUser={nowUser} /> ) })
                        :
                        <p style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '50px', fontSize: '15pt' }}>У пользователя нет постов</p>
                        }
                    </div>
                </div>
                {/* <div className='RightFilterDivNews'>
                    <div className='PunkForBut'>
                        <button
                            className={`ButPostNews ${activeButton === 'Все публикации' ? 'active' : ''}`}
                            onClick={handleFilterAll}
                        >
                            Все публикации
                        </button>
                    </div>
                    <div className='PunkForBut'>
                        <button
                            className={`ButSearchNews ${activeButton === 'Мои публикации' ? 'active' : ''}`}
                            onClick={handleFilterMy}
                        >
                            Мои публикации
                        </button>
                    </div>
                    <div className='PunkForBut'>
                        <button
                            className={`ButSearchNews ${activeButton === 'Публикации друзей' ? 'active' : ''}`}
                            onClick={handleFilterFriends}
                        >
                            Публикации друзей
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default NewsPage;