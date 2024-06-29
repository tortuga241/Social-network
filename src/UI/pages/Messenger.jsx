import React, { useState } from "react";
import Layout from '../../Layouts/layout.jsx'
import DialogPhoto from '../components/DialogMessenger/DialogPhoto.jsx'
import DialogText from '../components/DialogMessenger/DialogText.jsx'
import MainMenuList from '../components/MainMenuList.jsx'

import './Style/messenger.css';
import './../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip,faImage, faPaperPlane,} from '@fortawesome/free-solid-svg-icons';


import SearchIcon from '../pages/Icons/Search-icon.png'
import FriendImg1 from '../../assets/FriendMessenger1.png'
import FriendImg2 from '../../assets/FriendMessenger2.png'
import FriendImg3 from '../../assets/FriendMessenger3.png'


const MessengerPage = () => {
    return(
        <div className="MainDivMessenger">
            <Layout />
            <div className="MainDiv">
                <MainMenuList />
                <div className="AllMessengerDiv">
                    <div className="LeftMessengerBlock">
                        <div className="SearchDivMessenger">
                            <div className="MessengerSearchBar">
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <img id="SearchIconId" src={SearchIcon} alt="Search Icon"/>
                                    <input
                                        type="text"
                                        placeholder="Поиск"
                                        className="InputSearchMess"
                                    />
                                </div>
                            </div>
                        </div><br />
                        <div className="MessengerFriendsBlock">
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg1} alt="Friend Img 1" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Миша</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>text text text text text </p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg2} alt="Friend Img 2" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Мария</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>txet txet txet txet txet txet txet</p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg3} alt="Friend Img 3" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Карина Мишина</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>Запись на стене</p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg3} alt="Friend Img 3" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Карина Мишина</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>Вы: Запись на стене</p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg3} alt="Friend Img 3" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Карина Мишина</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>Запись на стене</p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg3} alt="Friend Img 3" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Карина Мишина</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>Запись на стене</p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg3} alt="Friend Img 3" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Карина Мишина</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>Запись на стене</p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg3} alt="Friend Img 3" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Карина Мишина</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>Запись на стене</p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg3} alt="Friend Img 3" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Карина Мишина</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>Запись на стене</p>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="FriendMessanger">
                                <div className="FriendPhoto">
                                    <img src={FriendImg3} alt="Friend Img 3" />
                                </div>
                                <div className="FriendMessangerText">
                                    <div className="FriendMessangerTextUp">
                                        <p className="FriendName">Карина Мишина</p>
                                        <p className="FriendDate">24 Июня</p>
                                    </div>
                                    <div className="FriendMessangerTextDown">
                                        <p>Запись на стене</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="RightMessengerBlock">
                        <div className="DialogHeader">
                            <div className="DialogHeaderLeftSide">
                                <p className="DialogHeaderLeftSideName">Миша</p>
                                <p className="DialogHeaderLeftSideTime">был в сети 41 минуту назад</p>
                            </div>
                            <div className="DialogHeaderRightSide">
                                <img id="SearchDialogIcon" src={SearchIcon} alt="Search Dialog Icon" />
                                <p id="DialogSett" >...</p>
                                <div className='DialogPhoto1'>
                                    <DialogPhoto dialogPhotoId={1}/>
                                </div>
                            </div>
                        </div><hr />
                        <div className="DialogBlock">
                            <p className="DialogDate" id="DateDialog1">20 июня</p>
                            <div className="MainDialog1">
                                <div className='DialogPhoto1'>
                                    <DialogPhoto dialogPhotoId={1}/>
                                </div>
                                <DialogText dialogTextId={1}/>
                            </div>
                            <div className="MainDialog1">
                                <div className='DialogPhoto1'>
                                    <DialogPhoto dialogPhotoId={4}/>
                                </div>
                                <DialogText dialogTextId={2}/>
                            </div>
                            <p className="DialogDate" id="DateDialog2">24 июня</p>
                            <div className="MainDialog1">
                                <div className='DialogPhoto1'>
                                    <DialogPhoto dialogPhotoId={1}/>
                                </div>
                                <DialogText dialogTextId={3}/>
                            </div>
                        </div>
                        <div className="DialogTextInput">
                            <div className="IntoDialogTextInput">
                                <FontAwesomeIcon icon={faPaperclip} style={{ color: "#ffffff", width: '20px', height: '20px'}} />
                                <DialogText dialogTextId={4}/>
                                <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff", width: '20px', height: '20px',marginRight: '5px'}} />
                                <FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff", width: '20px', height: '20px',marginRight: '5px'}}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MessengerPage;