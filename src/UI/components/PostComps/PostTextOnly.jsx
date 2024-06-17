import React, { useState, useEffect } from "react";
import './Style/PostTextOnly.css';
import CommentsComp from "./CommponentsForPosts/CommentsComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare, faEye, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

const PostTextOnly = ({postId, login}) => {
    const [post, setPost] = useState([])
    const [user, setUser] = useState(null)


    const [userName, setUserName] = useState('Loading...')
    const [avatarPath, setAvatarPath] = useState(null)
    const [repostInfo, setRepostInfo] = useState('Deleted')

    const [likes, setLikes] = useState(0)
    const [likesInfo, setLikesInfo] = useState([])
    const [commentsValue, setCommentsValue] = useState(0)
    const [repostsValue, setRepostsValue] = useState(0)

    const staticPath = '../../../../server/static'

    useEffect(() => {
        // ИНФО О ПОСТЕ
        fetch(`http://localhost:3000/post/findId/${postId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    // console.log('200')
                    setPost(response.post)
                }else{
                    // console.log(`Error: ${response.error}`)
                    // console.log(post)
                }
            })

        // ИНФО ОБ АВТОРЕ
        fetch(`http://localhost:3000/account/findById/${login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    // console.log('200')
                    setUserName(response.user.nickname)
                    setAvatarPath(response.user.avatarPath)
                }else{
                    // console.log(`Error: ${response.error}`)
                }
            })

        // ИНФО О ЛАЙКАХ
        fetch(`http://localhost:3000/likes/post/${postId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    // console.log('200')
                    // console.log(1)
                    setLikes(response.likes.length)
                    // setLikesInfo(response.likes)

                    const likeExists = response.likes.some(like => like.executer === nowUser.login)
                    setLikeStatus(likeExists)
                    if(likeExists) {
                        // console.log(3)
                        setLikeStyle('ActiveLike')
                    }else{
                        // console.log(4)
                        setLikeStyle('ButPost')
                    }
                }else{
                    // console.log(`Error: ${response.error}`)
                }
            })

        // ИНФО О РЕПОСТАХ
        fetch(`http://localhost:3000/post/reposts/${postId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    // console.log('200')
                    setRepostsValue(response.reposts.length)
                    // console.log(response.repost.length)

                    const RepostExists = response.reposts.some(repost => repost.author === nowUser.login)
                    setRepostStatus(RepostExists)
                    if(RepostExists) {
                        // console.log(3)
                        console.log(`$$$ - ACTIVE`)
                        setRepostStyle('ActiveRepost')
                    }else{
                        // console.log(4)
                        console.log(`$$$ - NOT ACTIVE`)
                        setRepostStyle('ButPost')
                    }
                }else{
                    // console.log(`Error: ${response.error}`)
                }
            })

        // ИНФО О КОММЕНТАХ
        fetch(`http://localhost:3000/comments/post/${postId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    // console.log('200')
                    setCommentsValue(response.comments.length)
                }else{
                    // console.log(`Error: ${response.error}`)
                }
            })

        // ИНФО О РЕПОСТЕ
    }, [])


    if(post.repostPostId != null) {
        // console.log(`REPOST2`)
        fetch(`http://localhost:3000/post/findId/${post.repostPostId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    // console.log('200')
                    // console.log(`REPOST`)
                    setRepostInfo(response.post.author)
                }else{
                    console.log(`Error: ${response.error}`)
                }
            })
    }

    const [likeStatus, setLikeStatus] = useState(false)
    const [likeStyle, setLikeStyle] = useState('ButPost')
    const nowUser = JSON.parse(localStorage.getItem('user'))

    const handleAddLike = () => {
        if(likeStatus){
            console.log(nowUser)
            setLikeStyle('ButPost')
            setLikes(likes-1)
            setLikeStatus(false)
            fetch(`http://localhost:3000/likes/post`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    postId: postId,
                    executer: nowUser.login
                })
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status == 200){
                        console.log('200')
                    }else{
                        console.log(`Error: ${response.error}`)
                    }
                })
        }else{
            console.log(nowUser)
            setLikeStyle('ActiveLike')
            setLikes(likes+1)
            setLikeStatus(true)
            fetch(`http://localhost:3000/likes/post`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    postId: postId,
                    executer: nowUser.login
                })
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status == 200){
                        console.log('200')
                    }else{
                        console.log(`Error: ${response.error}`)
                    }
                })
        }
    }

    const [repostStatus, setRepostStatus] = useState(false)
    const [repostStyle, setRepostStyle] = useState('ButPost')

    const handleRepost = () => {
        if(post.author != nowUser.login){
            if(repostStatus){
                return
            }
            setRepostStyle('ActiveRepost')
            setRepostsValue(repostsValue+1)
            setRepostStatus(true)
            fetch(`http://localhost:3000/post/add`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    author: nowUser.login,
                    content: post.content,
                    repostPostId: post.id
                })
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status == 200){
                        console.log('200')
                    }else{
                        console.log(`Error: ${response.error}`)
                    }
                }) 
        }
    }

    const [menuStatus, setMenuStatus] = useState(false)

    const handleOpenMenu = () => {
        if(menuStatus) {
            setMenuStatus(false)
        }else{
            setMenuStatus(true)
        }
    }

    const handleReport = () => {
        console.log(`Report:`)
        const reportData = {
            executer: nowUser,
            postId: postId,
        }
        console.log(reportData)
        setMenuStatus(false)
    }

    const handleDelete = () => {
        console.log('Delete')

        fetch(`http://localhost:3000/post/${postId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(response => {
                if(response.status == 200){
                    console.log('200')
                    location.reload()
                }else{
                    console.log(`Error: ${response.error}`)
                }
            }) 

        setMenuStatus(false)
    }

    // console.log('================')

    return (
        <div className="MainDivPostTextOnly">
            <div className="PostTxtInfo">
                <div className="UserAvatarPost" style={{ backgroundImage: `url(${staticPath}/${avatarPath})` }}></div>
                <div className="PostInfo">
                    <div className="PostUserName">{ post.repostPostId == null ? userName : `Repost: ${repostInfo}`}</div>
                    <div className="PostDate">{ post.date }</div>
                </div>
                <div className="PostMore" style={{ cursor: 'pointer', userSelect: 'none' }} onClick={handleOpenMenu}>...</div>
                <div style={{ width: '80px', maxHeight: '60px', marginLeft: '10px', display: menuStatus ? 'flex' : 'none', boxSizing: 'border-box', flexDirection: 'column' }}>
                    <div className={`PostMenu`} onClick={handleReport}>Пожаловаться</div>
                    <div className={`PostMenu2`} onClick={handleDelete}>Удалить</div>
                </div>
            </div>
            <div className="PostTextContent">{ post.content }</div>
            <div className="PostMoreFunc">
                <div className="PostIconsBut">
                    <button className={ likeStyle } onClick={ handleAddLike }>
                        <FontAwesomeIcon icon={faHeart} className="PostIconButIcon" />
                        <div className="kolvoPost">{ likes }</div>
                    </button>
                    <button className="ButPost">
                        <FontAwesomeIcon icon={faComment} className="PostIconButIcon" />
                        <div className="kolvoPost">{ commentsValue }</div>
                    </button>
                    <button className={ repostStyle } onClick={ handleRepost }>
                        <FontAwesomeIcon icon={faShare} className="PostIconButIcon" />
                        <div className="kolvoPost">{ repostsValue }</div>
                    </button>
                </div>
            </div>
            <hr className="shrOt"/>
            <span className="CommFilter">Сначала популярные <FontAwesomeIcon icon={faArrowTurnDown} className="FilterCommentsIc"/></span>
            <CommentsComp />
        </div>
    );
}

export default PostTextOnly;

