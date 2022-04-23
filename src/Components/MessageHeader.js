import React from 'react'
import { useSelector } from 'react-redux'

const MessageHeader = () => {

    const user = useSelector((state) => state.particularuser)
    const { name } = user

    return (
        <div className='header'>
            <div className='avatar' >
                <img src='https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt={name} />
            </div>
            <div className='message-search'>
                <input type="text" placeholder='Search Direct Messages' />
            </div>
            <div className='settings'>
                <i className="fas fa-cog"></i>
            </div>

        </div>
    )
}

export default MessageHeader
