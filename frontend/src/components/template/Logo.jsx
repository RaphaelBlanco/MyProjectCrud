import './Logo.css'
import logo from '../../assents/imgs/pepsi.png'
import React from 'react'

export default props =>
    <aside className='logo'>
        <a href='/' className='logo'>
            <img src={logo} alt='logo'/>
        </a>
    </aside>