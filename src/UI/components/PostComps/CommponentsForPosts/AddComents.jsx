import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Style/AddComents.css';

const AddComments = () => {
    return (
        <div className='AddPostMainDivCom'>
        <div className='AddPost'>
            <div className='UserAvatarAddPostCom'></div>
            <div className='AddPostInput'>
                <div className='InputWithAvatarFieldCom'>
                    <input type="text" placeholder="Написать коментарий..." className="InputPostPro"/>
                </div>
            </div>
            <div className='AddPostIconsCom'>
                <FontAwesomeIcon icon={faPaperPlane}  style={{color: "#ffffff", width: '20px', height: '20px', marginLeft: '30px'}}  />
            </div>
        </div>
    </div>
    )
}

export default AddComments;