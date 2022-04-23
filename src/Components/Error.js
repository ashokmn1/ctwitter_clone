import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <p>Invalid Credential</p>
            <Link to='/'>
                <p>Go back</p>
            </Link>
        </div>
    )
}

export default Error
