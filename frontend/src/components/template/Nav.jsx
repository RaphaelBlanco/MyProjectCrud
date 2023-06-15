import './Nav.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
export default props =>
    <aside className='menu-area'>
        <nav className='menu'>
            <a href="#/">
                <i className=''><FontAwesomeIcon icon={faHouse} /></i> Início
            </a>
            <a href='#/users'>
                <i className=''><FontAwesomeIcon icon={faUser} /></i> Usuário
            </a>
        </nav>
    </aside>