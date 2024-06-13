import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic } from '@fortawesome/free-solid-svg-icons';
import './Style/AddPostProfile.css';

const AddPostProfile = () => {
    const [showFirst, setShowFirst] = useState(true);

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
    }, []);

    return (
        <div>
            {showFirst ? (
                <div className='AddPostMainDivProfile' onClick={toggleView}>
                    <div className='AddPostProfile'>
                        <div className='UserAvatarAddPostProfile'></div>
                        <div className='AddPostInputProfile'>
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
                        <div className='UserAvatarAddPostProfileAct'></div>
                        <div className='AddPostInputProfileAct'>
                            <div className='InputWithAvatarFieldProfileAct'>
                                <input type="text" placeholder="Что у вас нового?" className="InputPostProf" />
                            </div>
                        </div>
                        <div className='AddPostIconsProfileAct'>
                            <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", width: '20px', height: '20px', marginLeft: '30px' }} />
                            <FontAwesomeIcon icon={faMusic} style={{ color: "#ffffff", width: '20px', height: '20px', marginLeft: '10px' }} />
                        </div>
                    </div>
                    <div className="DivForBut">
                    <button className="PublishButton">Опубликовать</button> {/* Кнопка "Опубликовать" */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddPostProfile;