import React from "react";
// import CommentsForComm from "./CommetnsForComm";
// import AddCommentsForComments from "./AddCommentsForComments.jsx";
import './Style/CommentsComp.css';

const CommentsComp = ({ comments = [] }) => {
    return (
        <div className="PostComments">
            {comments.map((comment, index) => (
                <div className="MainDivComments" key={index}>
                    <div className="CommentsInfo">
                        <div className="UserAvatarComment"></div>
                        <div className="UserNameComments">
                            <div className="UserNameCom">{comment.userName}</div>
                            <div className="CommentsTxtContent">{comment.text}</div>
                            <div className="CommentsAddDate">
                                <div className="CommentsDate">{comment.date}</div>
                                <div className="CommentsButs">
                                    <span className="ButCom" style={{marginRight: '2px'}}>Ответить</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {comment.replies && <CommentsForComm />} */}
                    {/* <CommentsForComm /> */}
                    {/* <AddCommentsForComments /> */}
                </div>
            ))}
        </div>
    );
}

export default CommentsComp;