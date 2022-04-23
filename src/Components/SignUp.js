import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSignUp = async (e) => {
        const response = await axios.post(`https://node-api-twitter.herokuapp.com/user`, {
            name: `${name}`,
            email: `${email}`,
            password: `${password}`,
            uname: `${userName}`
        })
            .catch((err) => {
                console.log(err)
            })
        setMessage(response.data)

        setName('')
        setUserName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div className='signUp-main-container'>
            <div className='signUp-main'>
                <div className='signUp-form'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSignUp()
                    }}>
                        <div className='signUp-header'>
                            <i className="fa-brands fa-twitter"></i>
                            <Link to='/'>
                                <i class="fa-solid fa-xmark" />
                            </Link>
                        </div>
                        <h3>Create your account</h3>
                        <input type="name" placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} required />
                        <input type="text" placeholder='username' value={userName} onChange={(e) => { setUserName(e.target.value) }} required />
                        <input type="email" placeholder='email address' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                        <input type="password" placeholder='enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                        <button type='submit'>Sign Up</button>
                        <p className='error-message'>{message}</p>
                        <Link to='/'>
                            <p className='signup-form'> Go To SignIn</p>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
