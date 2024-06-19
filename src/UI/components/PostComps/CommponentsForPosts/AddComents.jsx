import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Style/AddComents.css';

const AddComments = () => {
    const addPostRef = useRef(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (addPostRef.current && !addPostRef.current.contains(event.target)) {
                // Сбрасываем высоту текстового поля и контейнера
                if (textareaRef.current) {
                    textareaRef.current.style.height = 'auto';
                }
                if (addPostRef.current) {
                    addPostRef.current.style.height = 'auto';
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleInputChange = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
        if (addPostRef.current) {
            addPostRef.current.style.height = `${addPostRef.current.scrollHeight}px`;
        }
    };

    return (
        <div className='AddPostMainDivCom'>
            <div className='AddPost' ref={addPostRef} style={{ borderRadius: '10px' }}>
                <div className='UserAvatarAddPostCom'></div>
                <div className='AddPostInput'>
                    <div className='InputWithAvatarFieldCom'>
                        <textarea
                            placeholder="Написать комментарий..."
                            className="InputPostPro"
                            rows="1"
                            ref={textareaRef}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                </div>
                <div className='AddPostIconsCom'>
                    <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff", width: '20px', height: '20px' }} />
                </div>
            </div>
        </div>
    );
};

export default AddComments;