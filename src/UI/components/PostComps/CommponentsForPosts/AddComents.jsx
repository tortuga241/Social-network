import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Style/AddComents.css';

const AddComments = ({postId, avaPath}) => {
    const addPostRef = useRef(null);
    const textareaRef = useRef(null);

    const staticPath = '../../../../../server/static'

    const nowUser = JSON.parse(localStorage.getItem('user'))
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (addPostRef.current && !addPostRef.current.contains(event.target)) {
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
        .then(() => location.reload())
        .catch(error => console.error('Error:', error));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
        if (addPostRef.current) {
            addPostRef.current.style.height = `${addPostRef.current.scrollHeight}px`;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
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
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        ></textarea>
                    </div>
                </div>
                <div className='AddPostIconsCom' onClick={handleSend}>
                    <FontAwesomeIcon icon={faPaperPlane} className="AddPostIconsComBut"/>
                </div>
            </div>
        </div>
    );
};

export default AddComments;