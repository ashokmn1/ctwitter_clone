import React from 'react'
import NotificationHeader from './NotificationHeader'

const Notification = () => {

    return (
        <div className='message-content'>
            <div>
                <NotificationHeader />
            </div>
            <div className='notification-button'>
                <button className='notify-btn1 all'>All</button>
                <button className='notify-btn1'>Mentions</button>
            </div>
            <div className='page-center'>
                <h1>Join the conversation</h1>
                <p>From Retweets to likes and a whole lot more, this is where all the action about your Tweets and followers happens. You'll like it here.</p>
            </div>
            <div className="add-message">
                <i class="fas fa-plus"></i>
            </div>

        </div>
    )
}

export default Notification
