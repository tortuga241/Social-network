import React from "react";
import './Style/CommentsForComm.css';

const CommetnsForComm = () => {
    return (
        <div className="MainDivCommForComm">
            <hr className="shrOtTwo"/>
            <div className="NextComments">
                <div className="UserAvatarNextCom"></div>
                <div className="UserNameNextCom">Олег</div>
                <p className="TxtMore">ответил</p>
                <p className="TxtMore">Ещё 23 ответа</p>
            </div>
        </div>
    )
}

export default CommetnsForComm;