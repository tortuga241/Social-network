import React, { useState } from 'react';
import Layouts from '../../Layouts/layout.jsx';
import MainMenuList from '../components/MainMenuList.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic } from '@fortawesome/free-solid-svg-icons';
import './Style/NewsPage.css';

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
                <div className="DivForMain">
                    <MainMenuList />
                </div>
                <div className="NewsPageMore">
                    <div className="addContent">
                        <div className="form">
                            <div className="add-post" id="add-post">
                                <div className="avatar" id="avatar"></div>
                                <div className="name" id="name"></div>
                                <div className="post-img" id="post-img"></div>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    {imagePreview && <img id="image-preview" src={imagePreview} alt="Preview" style={{ display: "block" }} />}
                                    <textarea
                                        id="expandingTextarea"
                                        rows="1"
                                        placeholder="Что у вас нового?"
                                        value={text}
                                        onChange={handleTextareaChange}
                                    ></textarea>
                                    <input
                                        type="file"
                                        id="file-input"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="file-input" id="file-label">
                                        <FontAwesomeIcon icon={faImage} style={{ color: '#ffffff', width: '20px', height: '25px' }} />
                                    </label>
                                    <input
                                        type="file"
                                        id="file-input-mp3"
                                        accept="audio/mp3"
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="file-input-mp3" id="file-label-mp3">
                                        <FontAwesomeIcon icon={faMusic} style={{ color: '#ffffff', width: '20px', height: '25px' }} />
                                    </label>
                                    <button id="button-output" type="button" onClick={handlePost}>
                                        Опубликовать
                                    </button>
                                </form>
                            </div>
                        </div>
                        <input type="file" id="image-input" accept="image/*" style={{ display: "none" }} />
                        <div id="image-container"></div> {/* Контейнер для отображения измененного изображения */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;