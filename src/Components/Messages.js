import React from 'react'
import MessageHeader from './MessageHeader'

const Messages = () => {
    return (
        <div className='message-content'>
            <div>
                <MessageHeader />
            </div>
            <div className='page-center'>
                <h1>Welcome to your inbox!</h1>
                <p>Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!</p>
                <button className='msg-btn'>Write a message</button>
            </div>
            <div className="add-message">
                <i className="far fa-envelope"></i>
            </div>

        </div>
    )
}

export default Messages
