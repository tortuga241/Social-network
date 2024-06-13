import React, { useState } from 'react';
import Layouts from '../../Layouts/layout.jsx';
import MainMenuList from '../components/MainMenuList.jsx';
import AddPost from '../components/AddPost.jsx';
import HistoryCompCurcl from '../components/NewsPageComponents/HistoryCompCurcl.jsx';
import PostTextOnly from '../components/PostComps/PostTextOnly.jsx';
import './Style/NewsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const NewsPage = () => {
    const [text, setText] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

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

    return (
        <div className="MainDivNewsPage">
            <Layouts />
            <div className="MainContentPage">
                <div className="DivForMain" style={{width: '250px'}}>
                    <MainMenuList />
                </div>
                <div className="NewsPageMore">
                    <AddPost />
                    {/* Истории (Сторис) */}
                    <div className='HistoryDiv'>
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
                    </div>
                    <div className='PostsNewsPage'>
                        <PostTextOnly />
                        <PostTextOnly />
                    </div>
                </div>
                <div className='RightFilterDivNews'>
                    <div className='PunktForBut'> <button className='ButPostNews'>Поиск</button></div>
                    <div className='PunktForBut'> <button className='ButPhotoNews'>Фотографии</button></div>
                    <div className='PunktForBut'> <button className='ButSearchNews'>Поиск</button></div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;