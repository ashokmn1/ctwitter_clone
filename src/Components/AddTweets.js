import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'



const AddTweets = () => {

  const user = useSelector(state => state.particularuser.user[0].id)
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')

  const tweetSubmit = (e) => {
    e.preventDefault()
    const submitData = new FormData()
    submitData.append('file', image)
    submitData.append("upload_preset", "igleoy9k")


    axios.post("https://api.cloudinary.com/v1_1/mnashok/image/upload", submitData)
      .then(res => {
        const image = res.data.secure_url
        postTweets(user, image, caption)
      })
  }

  const postTweets = async (user_id, image, caption) => {
    const response = axios.post(`https://node-api-twitter.herokuapp.com/user/tweet`, {
      "user_id": user_id,
      "content": `${image}`,
      "discription": `${caption}`
    })
      .catch((err) => {
        console.log(err)
      })
    setMessage('tweet sucessfully')
    setCaption('')
  }

  return (
    <div className='add-tweet-mob'>
      <Link to='/home'>
        <div className='close-add'>
          <i className="fa-solid fa-xmark" />
        </div>
      </Link>
      <form className='add-tweet-div'>
        <p className='tweetStatus'>{message}</p>
        <textarea cols='25' rows='15' placeholder="What's happening?" value={caption} onChange={(e) => { setCaption(e.target.value) }} />
        <input type="file" placeholder='Add image' onChange={(e) => { setImage(e.target.files[0]) }} />
          <button onClick={tweetSubmit}>Tweet</button>
      </form>
    </div>
  )
}

export default AddTweets
