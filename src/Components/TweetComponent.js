import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Comment from './Comment'
import { useNavigate } from 'react-router-dom'


const TweetComponent = () => {

    const tweets = useSelector((state) => Object.values(state.allTweets))

    const [commentVal, setCommentValue] = useState('')
    const [comments, setComments] = useState([])
    const [toggle, setToggle] = useState(false)
    const [like,setLike] = useState(false)



    const handleAddComment = (id) => {
        console.log("commented")
        if (commentVal.trim() != "") {
            setComments([...comments, commentVal])
        }
        setCommentValue('')
    }

    let navigate =useNavigate()

    let render
    if (tweets.length != 0) {
        render = tweets.map((tweet) => {
            let { id, content, discription, avatar, name, uname } = tweet
            return (
                <div className='tweets-container' key={id}>
                    <div className='avatar'>
                        <img src='https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt={name} />
                    </div>
                    <div className='tweets'>
                        <div className='userName'>
                            <div className='name'>
                                <p>{name}</p>
                            </div>
                            <div className='uname'>
                                <p>{uname}</p>
                            </div>
                        </div>
                        <div className='tweets-content'>
                            <div className='description'>
                                {discription}
                            </div>
                            <div className='image'>
                                <img src={content} />
                                <div className='comment-bar'>
                                    <i onClick={()=>navigate(`/tweets/${id}/comment`)} className="fa-regular fa-comment"></i>
                                    <i className="fa-solid fa-retweet"></i>
                                    {like ? <i class="fa-solid fa-heart grow" style={{ color: '#1DA1F2' }} onClick={() => setLike(false)}></i> : <i className="fa-regular fa-heart" onClick={() => setLike(true)}></i>}
                                    <i className="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                            <div>
                                {comments.map((val) => {
                                    return (
                                        <Comment text={val} />
                                    )
                                })}
                            </div>
                            {toggle ? 
                            <div className='comments'>
                                <input type="text" value={commentVal} placeholder="Add Comments" onChange={(e) => setCommentValue(e.target.value)} />

                                <i onClick={handleAddComment} class="fas fa-plus"></i>
                            </div>:null}
                        </div>
                    </div>
                </div >
            )
        })
    }


    return (
        <>
            {render}
        </>
    )
}

export default TweetComponent
