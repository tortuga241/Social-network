import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic } from '@fortawesome/free-solid-svg-icons';
import './Style/AddPostProfile.css';

const AddPostProfile = ({ accOwner, login, avaPath }) => {
    const [showFirst, setShowFirst] = useState(true);
    const [firstEffect, setFirstEffect] = useState(false)

    const [inputText, setInputText] = useState(null)

    const staticPath = '../../../server/static'

    const toggleView = () => {
        setShowFirst(!showFirst);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Проверяем, находится ли клик внутри компонента
            if (!event.target.closest('.AddPostMainDivProfile') &&
                !event.target.closest('.AddPostMainDivProfileAct')) {
                setShowFirst(true); // Возвращаемся к изначальному состоянию
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };

        setFirstEffect(true)
    }, []);

    useEffect(() => {

    }, [firstEffect])

    const handleAdd = () => {
        if( inputText.length > 0 ){
            console.log(200)
            fetch('http://localhost:3000/post/add', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    author: login,
                    content: inputText,
                    repostPostId: null,
                })
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status == 200){
                        console.log(`Отправка 200`)
                        location.reload()
                    }else{
                        console.log('Ошибка публикации: '+response.error)
                    }
                })
                .catch(error => {
                    console.error('Error fetching login:', error);
                });
        }else{
            console.log(400)
        }
    }


    return (
        <div style={{ display: accOwner ? 'flex' : 'none'}}>
            {showFirst ? (
                <div className='AddPostMainDivProfile' onClick={toggleView}>
                    <div className='AddPostProfile'>
                        <div className='UserAvatarAddPostProfile' style={{ backgroundImage: `url(${staticPath}/${avaPath})` }}></div>
                        <div className='AddPostInputProfile' ыенд>
                            <div className='InputWithAvatarFieldProfile'>
                                <input type="text" placeholder="Что у вас нового?" className="InputPostPro" />
                            </div>
                        </div>
                        <div className='AddPostIconsProfile'>
                            <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", width: '20px', height: '20px', marginLeft: '30px' }} />
                            <FontAwesomeIcon icon={faMusic} style={{ color: "#ffffff", width: '20px', height: '20px', marginLeft: '10px' }} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='AddPostMainDivProfileAct'>
                    <div className='AddPostProfileAct'>
                        <div className='UserAvatarAddPostProfileAct' style={{ backgroundImage: `url(${staticPath}/${avaPath})` }}></div>
                        <div className='AddPostInputProfileAct'>
                            <div className='InputWithAvatarFieldProfileAct'>
                                <input type="text" placeholder="Что у вас нового?" className="InputPostProf" onChange={(e) => { setInputText(e.target.value) }}/>
                            </div>
                        </div>
                        <div className='AddPostIconsProfileAct'>
                            <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", width: '20px', height: '20px', marginLeft: '30px' }} />
                            <FontAwesomeIcon icon={faMusic} style={{ color: "#ffffff", width: '20px', height: '20px', marginLeft: '10px' }} />
                        </div>
                    </div>
                    <div className="DivForBut">
                    <button className="PublishButton" onClick={handleAdd}>Опубликовать</button> {/* Кнопка "Опубликовать" */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddPostProfile;