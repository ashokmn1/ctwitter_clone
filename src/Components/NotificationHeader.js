import React from 'react'
import { useSelector } from 'react-redux'

const NotificationHeader = () => {

    const user = useSelector((state) => state.particularuser)
    const { name } = user

    return (
        <div className='header'>
            <div className='avatar' >
                <img src='https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt={name} />
            </div>
            <h4>Notifications</h4>
            <div className='settings'>
                <i className="fas fa-cog"></i>
            </div>

        </div>

    )
}

export default NotificationHeader
