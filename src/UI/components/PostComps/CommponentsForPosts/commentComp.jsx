import React from "react";
import './Style/CommentsComp.css';
import { useEffect, useState } from "react";

const CommentComp = ({ comment }) => {
    const staticPath = '../../../../../server/static'
    const [avaPath, setAvaPath] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:3000/account/findById/${comment.executer}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log(`20202020202020`)
                    setAvaPath(response.user.avatarPath)
                }else{
                    console.log(`${response.status}: ${response.error}`)
                }
            })
    },[])

    return (
        <div className="MainDivComments">
            <div className="CommentsInfo">
                <div className="UserAvatarComment" style={{ backgroundImage: `url(${staticPath}/${avaPath})` }}></div>
                <div className="UserNameComments">
                    <div className="UserNameCom">{comment.executer}</div>
                    <div className="CommentsTxtContent">{comment.content}</div>
                    <div className="CommentsAddDate">
                        <div className="CommentsDate">{comment.date}</div>
                        <div className="CommentsButs">
                            <span className="ButCom" style={{marginRight: '2px'}}>Ответить</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentComp;