import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SET_TWEETS, SET_USER, SET_USERS, SET_USER_PROFILE } from '../redux/actions/allActions'
import axios from 'axios'



const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState('')

    const dispatch = useDispatch()

    const fetchUsers = async () => {
        const response = await axios.get(`https://node-api-twitter.herokuapp.com/users`)
            .catch((err) => {
                console.log("error", err)
            })
        dispatch(SET_USERS(response.data))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const allUsers = useSelector(state => Object.values(state.allusers))

    let navigate = useNavigate();
    const handleSignIn = (e) => {
    const    render = allUsers.map((user) => {
            if (email === user.email) {
                if (password === user.password) {
                    setActiveUser(user.id)
                    navigate('/home')
                    fetchTweets()
                }
            } else {
                console.log('failed')
                setError('Authentication failed')
            }
        })
    }


    const fetchTweets = async () => {
        const response = await axios.get(`https://node-api-twitter.herokuapp.com/users/tweets`)
            .catch((err) => {
                console.log("error", err)
            })
        dispatch(SET_TWEETS(response.data))
    }

    const setActiveUser = async (id) => {
        const response = await axios.put(`https://node-api-twitter.herokuapp.com/user/${id}`,{
            id:`${id}`,
            active:0
        })
            .catch((err) => {
                console.log("error", err)
            })
        console.log(response)
    }

    const fetchActiveUser = async () => {
        const response = await axios.get(`https://node-api-twitter.herokuapp.com/user/state/0`)
            .catch((err) => {
                console.log("error", err)
            })
        console.log(response.data)
        dispatch(SET_USER(response.data))
    }

    useEffect(()=>{
        fetchActiveUser()
        fetchTweets()
    },[])

    return (
        <div className='signIn-container'>
            <div className='signIn-overlay'></div>
            <div className='popup-container'>
                <div className='signIn-box'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSignIn()
                    }}>
                        <i className="fa-brands fa-twitter"></i>
                        <input className='emailInput' type="email" placeholder='email address' value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
                        <input className='password' type="password" placeholder='enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
                        <p className='error-message'>{error}</p>
                        <button className='signin-btn' type='submit' >Sign In</button>
                        <p>Don't have an account ?</p>
                            <Link to='/signup'>
                                <span className='signup-form'> Sign up here</span>
                            </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
