import React from "react";
// import CommentsForComm from "./CommetnsForComm";
// import AddCommentsForComments from "./AddCommentsForComments.jsx";
import './Style/CommentsComp.css';
import { useEffect } from "react";
import CommentComp from "./commentComp";

const CommentsComp = ({ comments = [] }) => {

    return (
        <div className="PostComments">
            {comments.map((comment) => (
                <CommentComp comment={comment}/>
            ))}
        </div>
    );
}

export default CommentsComp;