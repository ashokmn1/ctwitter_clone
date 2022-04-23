import React from 'react'
import { useSelector } from 'react-redux'


const MenuHeader = () => {
    const user = useSelector((state) => state.particularuser.user)

    let name
    let uname
    let bio
    if (user != '') {
        name = user[0].name
        uname = user[0].uname
        bio = user[0].bio
    }

    return (
        <div className='menuHeader'>
            <div className='nav'>
                <div className='avatar'>
                    <img src='https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt={name} />
                </div>
                <i class="fa-solid fa-xmark" onClick={() => {
                    let toggle = document.querySelector('.sideMenuContainer')
                    toggle.classList.remove('show-toggle')
                    toggle.classList.add('hide-toggle')
                }}></i>
            </div>
            <div className='userName'>
                <div className='name'>
                    <p>{name}</p>
                    <div className='uname'>
                        <p>@{uname}</p>
                    </div>
                </div>
                <div className='connections'>
                    <p>200 Following</p>
                    <p>1.5M Followers</p>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader
