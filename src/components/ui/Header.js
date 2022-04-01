// this is the file for our header component which we are gonna use later within our app component
import React from 'react'
import logo from '../../img/logo.png' // here we are importing our logo image for use it iniside our header 

const Header = () => { // with this we are creating the jsx elements that are gonna be displayed in our app header
  return (
    <header className='center'> {/*Here we are defining the class name for our header element for us to later display it in the center of our page by styling it with css */}
        <img src={logo} alt=''/>
    </header>
  )
}

export default Header 

