import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic } from '@fortawesome/free-solid-svg-icons';
import './Style/AddPost.css';

const AddPost = () => {
    return (
        <div className='AddPostMainDiv'>
            <div className='AddPost'>
                <div className='UserAvatarAddPost'></div>
                <div className='AddPostInput'>
                    <div className='InputWithAvatarField'>
                        <p>Что у вас нового?</p>
                    </div>
                </div>
                <div className='AddPostIcons'>
                    <FontAwesomeIcon icon={faImage} style={{color: "#ffffff", width: '20px', height: '20px', marginLeft: '30px'}} />
                    <FontAwesomeIcon icon={faMusic} style={{color: "#ffffff", width: '20px', height: '20px', marginLeft: '10px' }} />
                </div>
            </div>
        </div>
    )
}

export default AddPost;