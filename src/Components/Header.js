import React from 'react'
import { useSelector } from 'react-redux'


const Header = () => {

  const user = useSelector((state) => state.particularuser.user)
  let name
  console.log(user)
  if (user != '') {
    name = user[0].name
  }
  console.log(name)



  return (
    <div className='header'>
      <div className='avatar'>
        <img src='https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt={name} onClick={() => {
          let toggle = document.querySelector('.sideMenuContainer')
          toggle.classList.remove('hide-toggle')
          toggle.classList.add('show-toggle')
        }} />
      </div>
      <div className='message-search'>
        <i class="fas fa-search"></i>
        <input type="text" placeholder='Search Twitter' />
      </div>
      <i className="fa-brands fa-twitter"></i>
      <div className='sparkle-icon'>
        <i class="fa-solid fa-wand-magic-sparkles"></i>
      </div>
    </div>
  )
}

export default Header
