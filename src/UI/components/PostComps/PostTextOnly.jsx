import React from "react";
import './Style/PostTextOnly.css';
import CommentsComp from "./CommponentsForPosts/CommentsComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare, faEye, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

const PostTextOnly = () => {
    return (
        <div className="MainDivPostTextOnly">
            <div className="PostTxtInfo">
                <div className="UserAvatarPost"></div>
                <div className="PostInfo">
                    <div className="PostUserName">Александер Александрович</div>
                    <div className="PostDate">Вчера 20:31</div>
                </div>
                <div className="PostMore">...</div>
            </div>
            <div className="PostTextContent">
                Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст 
                Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст 
                Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст 
                Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст 
                Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст 
                Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст Текст текст
                Текст текст Текст текст Текст
            </div>
            <div className="PostMoreFunc">
                <div className="PostIconsBut">
                    <button className="ButPost">
                        <FontAwesomeIcon icon={faHeart} className="PostIconButIcon" />
                        <div className="kolvoPost">321</div>
                    </button>
                    <button className="ButPost">
                        <FontAwesomeIcon icon={faComment} className="PostIconButIcon" />
                        <div className="kolvoPost">213</div>
                    </button>
                    <button className="ButPost">
                        <FontAwesomeIcon icon={faShare} className="PostIconButIcon" />
                        <div className="kolvoPost">123</div>
                    </button>
                    <div className="PostWatchKolvo">
                        <FontAwesomeIcon icon={faEye} className="PostIconEye"/>
                        <div className="kolvoPost">123</div>
                    </div>
                </div>
            </div>
            <hr className="shrOt"/>
            <span className="CommFilter">Сначала популярные <FontAwesomeIcon icon={faArrowTurnDown} className="FilterCommentsIc"/></span>
            <CommentsComp />
        </div>
    );
}

export default PostTextOnly;