import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Style/AddComents.css';

const AddComments = ({postId, avaPath}) => {
    const addPostRef = useRef(null);
    const textareaRef = useRef(null);

    const staticPath = '../../../../../server/static'

    const nowUser = JSON.parse(localStorage.getItem('user'))
    const [inputValue, setInputValue] = useState(null)

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

    const handleSend = () => {
        fetch(`http://localhost:3000/comments/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: inputValue,
                executer: nowUser.login,
                id: postId
            })
        })
            .then(location.reload())
        console.log('aaa')
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
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
                <div className='UserAvatarAddPostCom' style={{ backgroundImage: `url(${staticPath}/${avaPath})` }}></div>
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
                <div className='AddPostIconsCom' onClick={handleSend}>
                    <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff", width: '20px', height: '20px' }} />
                </div>
            </div>
        </div>
    );
};

export default AddComments;