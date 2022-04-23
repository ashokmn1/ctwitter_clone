import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { SET_USER_PROFILE } from '../redux/actions/allActions'


const ProfileComponent = () => {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.particularuser.user)

  let name
  let uname
  let bio
  if (user !== undefined) {
    name = user[0].name
    uname = user[0].uname
    bio = user[0].bio
  }


  const fetchUserProfile = async () => {
    const response = await axios.get(`https://node-api-twitter.herokuapp.com/user/${user[0].id}/tweets`)
      .catch((err) => {
        console.log("error", err)
      })
    dispatch(SET_USER_PROFILE(response.data))
  }


  useEffect(() => {
    fetchUserProfile()
  }, [])

  const tweets = useSelector((state) => Object.values(state.userprofile))
  console.log(tweets)
  let render
  if (tweets.length !== 0) {
    render = tweets.map((tweet) => {
      let { id, content, discription } = tweet
      return (
        <div className='tweets-container profile' key={id}>
          <div className='avatar'>
            <img src='https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt={name} />
          </div>
          <div className='tweets'>
            <div className='userName'>
              <div className='name'>
                <p>{name}</p>
                <div className='verified'>
                  <span className="fa-stack small">
                    <i className="fa-solid fa-certificate fa-stack-2x"></i>
                    <i className="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                  </span>
                </div>
              </div>
              <div className='uname'>
                <p>@{uname}</p>
              </div>
            </div>
            <div className='tweets-content'>
              <div className='description'>
                {discription}
              </div>
              <div className='image'>
                <img src={content} alt={name} />
              </div>
              <div className='comment-bar'>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-retweet"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-share-nodes"></i>
              </div>
            </div>

          </div>
        </div >
      )
    })
  }



  return (
    <div className='profile'>
      <div className='userProfile'>
        <div className='header profile'>
          <div className='avatar'>
            <img src='https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt={user} />
          </div>
          <Link to="/home">
            <i className="fa-solid fa-xmark" />
          </Link>
        </div>
        <div className='name'>
          {name}
          <div className='edit'>
          </div>
        </div>
        <div className='name'>
          @{uname}
        </div>
        <div className='name'>
          {bio}
        </div>
      </div>
      <div className='profilerender'>
        {render}
      </div>
    </div>
  )
}

export default ProfileComponent
