import React, { useState } from 'react'
import MenuHeader from './MenuHeader'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const SideComponents = () => {


    const user = useSelector(state => state.particularuser.user)
    console.log(user)

    const removeActiveUser = async (id) => {
        const response = await axios.put(`https://node-api-twitter.herokuapp.com/user/${user[0].id}`, {
            active: 1
        })
            .catch((err) => {
                console.log("error", err)
            })
    }

    const removeUser = () => {
        console.log('done')
            removeActiveUser()
    }

    return (
        <>
            <div className='menuList'>
                <div className='sideMenu'>
                    <MenuHeader />
                </div>
                <div className='logo'>
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div className='menuIconLists'>
                    <Link to='/home'>
                        <div className='side-home list'>
                            <i className="fas fa-house "></i>
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link to='/profile'>
                        <div className='menuProfile list'>
                            <i className="far fa-user"></i>
                            <span> Profile</span>
                        </div>
                    </Link>
                    <div className='menuLists list'>
                        <i className="far fa-list-alt"></i>
                        <span>Lists</span>
                    </div>
                    <div className='menuTopics list'>
                        <i class="far fa-comment"></i>
                        <span> Topics</span>
                    </div>
                    <div className='menuBookmark list'>
                        <i class="far fa-bookmark"></i>
                        <span> Bookmarks</span>
                    </div>
                    <div className='menuMoments list'>
                        <i class="fa-solid fa-bolt-lightning"></i>
                        <span> Moments</span>
                    </div>
                    <div className='menuMonetisation list'>
                        <i class="fa-solid fa-money-bills"></i>
                        <span>Monetisation</span>
                    </div>
                </div>
                <div className='menuProfessionals'>
                    <i class="fa-solid fa-rocket"></i>
                    <span>Twitter for Professionals</span>
                </div>
                <div className='menuSetting'>
                    <p >Settings and privicy</p>
                    <p >Help Center</p>
                    <Link to='/'>
                        <button onClick={() =>removeUser()}>Log Out</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SideComponents
