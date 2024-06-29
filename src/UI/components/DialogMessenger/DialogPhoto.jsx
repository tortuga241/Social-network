import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../pages/Style/messenger.css';


import FriendImg1 from '../../../assets/FriendMessenger1.png'
import FriendImg2 from '../../../assets/FriendMessenger2.png'
import FriendImg3 from '../../../assets/FriendMessenger3.png'
import FriendImg4 from '../../../assets/FriendMessenger4.png'

const DialogPhoto = ({ dialogPhotoId }) => {
    const dialogsPhoto = {
        1: (
            <img className="FriendDialogImg" id='PhotoDialog1' src={FriendImg1} alt="Friend Dialog Img 1" />
        ),
        2:(
            <img className="FriendDialogImg" id='PhotoDialog4' src={FriendImg2} alt="Friend Dialog Img 4" />
        ),
        3:(
            <img className="FriendDialogImg" id='PhotoDialog4' src={FriendImg3} alt="Friend Dialog Img 4" />
        ),
        4:(
            <img className="FriendDialogImg" id='PhotoDialog4' src={FriendImg4} alt="Friend Dialog Img 4" />
        )
    }
    return dialogsPhoto[dialogPhotoId] || null;
    
}
export default DialogPhoto;

