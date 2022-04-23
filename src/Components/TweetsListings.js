import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SET_TWEETS, SET_USER, SET_USER_PROFILE } from '../redux/actions/allActions'
import TweetComponent from './TweetComponent'
import Header from './Header'
import SideComponents from './SideComponents'
import { Link } from 'react-router-dom'

const TweetsListings = () => {

    const [isTrue, setIsTrue] = useState('true')

    const dispatch = useDispatch()

    const fetchTweets = async () => {
        const response = await axios.get(`https://node-api-twitter.herokuapp.com/users/tweets`)
            .catch((err) => {
                console.log("error", err)
            })
        dispatch(SET_TWEETS(response.data))
    }

    const user = useSelector(state => state.particularuser.user)

    const fetchActiveUser = async () => {
        const response = await axios.get(`https://node-api-twitter.herokuapp.com/user/state/0`)
            .catch((err) => {
                console.log("error", err)
            })
        dispatch(SET_USER(response.data))
    }

    const fetchUserProfile = async () => {
        const response = await axios.get(`https://node-api-twitter.herokuapp.com/user/${user[0].id}/tweets`)
            .catch((err) => {
                console.log("error", err)
            })
        dispatch(SET_USER_PROFILE(response.data))
    }


    useEffect(() => {
        fetchActiveUser()
        fetchTweets()
        fetchUserProfile()
    }, [])

    const showInput = () => {
        !isTrue ? setIsTrue(true) : setIsTrue(false)
    }

    return (
        <div className='container'>
            <Header />
            <div className='mainTweetcontainer'>
                <TweetComponent />
            </div>
            <div className='sideMenuContainer'>
                <div className='side-toggle'>
                    <SideComponents />
                </div>
                <div className='overlay'></div>
            </div>
            <div className='add-Tweet-icon' onClick={showInput}>
                <Link to='/tweet'>
                    <i class="fas fa-plus"></i>
                </Link>
            </div>
        </div>
    )
}

export default TweetsListings
