import React from "react";
import CommentsForComm from "./CommetnsForComm";
import AddComments from "./AddComents";
import './Style/CommentsComp.css';

const CommentsComp = () => {
    return (
        <div className="PostComments">
            <div className="MainDivComments">
                <div className="CommentsInfo">
                    <div className="UserAvatarComment"></div>
                    <div className="UserNameComments">
                        <div className="UserNameCom">Василий Антипов</div>
                        <div className="CommentsTxtContent">Ну шо ты лысый плаки плаки или нормалдаки?</div>
                        <div className="CommentsAddDate">
                            <div className="CommentsDate">Вчера в 23:00</div>
                            <div className="CommentsButs">
                                <span className="ButCom" style={{marginRight: '2px'}}>Ответить</span>
                                <span style={{fontSize: '13px', marginTop: '2px'}}>|</span>
                                <span className="ButCom" style={{marginLeft: '2px'}}>Переслать</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommentsForComm />
            <AddComments />
        </div>
    )
} 

export default CommentsComp;