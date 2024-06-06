import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMusic } from '@fortawesome/free-solid-svg-icons';
import './Style/AddPostProfile.css';

const AddPostProfile = () => {
    return (
        <div className='AddPostMainDivProfile'>
            <div className='AddPostProfile'>
                <div className='UserAvatarAddPostProfile'></div>
                <div className='AddPostInputProfile'>
                    <div className='InputWithAvatarFieldProfile'>
                        <p>Что у вас нового?</p>
                    </div>
                </div>
                <div className='AddPostIconsProfile'>
                    <FontAwesomeIcon icon={faImage} style={{color: "#ffffff", width: '20px', height: '20px', marginLeft: '30px'}} />
                    <FontAwesomeIcon icon={faMusic} style={{color: "#ffffff", width: '20px', height: '20px', marginLeft: '10px' }} />
                </div>
            </div>
        </div>
    )
}

export default AddPostProfile;