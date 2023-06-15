import './Header.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default props =>
    <header className='header d-none d-sm-flex flex-column'>
        <h1 className="mt-3">
            <FontAwesomeIcon icon={faHouse}/>
            {props.title}
        </h1>
        <p className='lead text-muted'>{props.subtitle}</p>
    </header>