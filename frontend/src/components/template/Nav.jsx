import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

import Home from '../home/Home'
import UserCrud from '../user/UserCrud'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default props =>
    <aside className='menu-area'>
        <nav className='menu'>
            <Link to='/'>
                <i className=''><FontAwesomeIcon icon={faHouse} /></i> Início
            </Link>
            <Link to='/users'>
                <i className=''><FontAwesomeIcon icon={faUser} /></i> Usuário
            </Link>
        </nav>
    </aside>