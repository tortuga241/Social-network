import React from "react";
import './Style/CommentsComp.css';
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CommentComp = ({ comment }) => {
    const staticPath = '../../../../../server/static'
    const [avaPath, setAvaPath] = useState(null)

    const nowUser = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

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

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleDelete = () => {
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
            .then(location.reload())
    }

    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };

    return (
        <div className="MainDivComments">
            <div className="CommentsInfo">
                <div className="UserAvatarComment" style={{ backgroundImage: `url(${staticPath}/${avaPath})` }}></div>
                <div className="UserNameComments">
                    <div className="UserNameCom" onClick={() => {navigate(`/profile/${comment.executer}`); window.location.reload()}} style={{ cursor: 'pointer' }}>{comment.executer}</div>
                    <div className="CommentsTxtContent">{comment.content}</div>
                    <div className="CommentsAddDate">
                        <div className="CommentsDate">{comment.date}</div>
                        <div className="CommentsButs">
                            <span className="ButCom" style={{marginRight: '2px'}}>Ответить</span>
                        </div>
                    </div>
                </div>
                <div className="comments-container-commetns">
                    <div className="MoreComemntsFunc" style={{ fontSize: '15pt', paddingTop: '10px', userSelect: 'none' }} onClick={toggleDropdown}>...</div>
                    {isDropdownVisible && (
                    <div className="dropdown-menu-comments">
                        { nowUser.login != comment.executer ?
                            <>
                            <button onClick={() => alert("Жалоба отправлена")}>Пожаловаться</button> 
                            <button onClick={() => alert("Пользователь заблокирован")}>Заблокировать</button>
                            </>
                        :
                            <button onClick={handleDelete}>Удалить</button>
                        }
                    </div>
                    )}
                    <div className="LikeBut">
                        <button className="IconLikeButComent" onClick={handleClick}><FontAwesomeIcon icon={faHeart} style={{color: liked ? "red" : "#ffffff"}} /><div className="CommentsSchet">2</div></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentComp;