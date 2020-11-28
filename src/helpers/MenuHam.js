import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { CloseMenuHam, OpenMenuHam } from '../actions/menuHam';


export const MenuHam = () => {

    const dispatch = useDispatch();

    const {menuHamOpen} = useSelector(state => state.menuHam)
    console.log(menuHamOpen);

    const handleOpenMenuHam =()=>{
        if (menuHamOpen===false) {
            
            dispatch( OpenMenuHam());
        }
        if (menuHamOpen===true) {
            dispatch( CloseMenuHam());
        }
    }

    return (
        <div className='contentMenuHam'>
            <i className="fas fa-bars iconHam"
                onClick={ handleOpenMenuHam }
            ></i>
           {
               menuHamOpen=== true
               &&
           <ul className='ulMenuHam'>
                <li className='liHamMenu'><Link to='/Home'>Home</Link></li>
                <li className='liHamMenu'><Link to='/People'>People</Link></li>
                <li className='liHamMenu'><Link to='/Business'>Business</Link></li>
                <li className='liHamMenu'><Link to='/Login'>Login</Link></li>
            </ul>}
        </div>
    )
}
