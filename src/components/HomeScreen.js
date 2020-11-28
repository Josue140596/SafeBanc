import React from 'react';


import {Link} from 'react-router-dom';

// Menu responsive
import { MenuHam } from '../helpers/MenuHam';

export const HomeScreen = () => {
    return (
        <div className='containerHome'>
        
            <div className='subcontainerHome'>
                <div className='navBar'>
                <MenuHam />
                    <ul className='ulHomeScreen'>
                        <li className='liHomeScreen'><Link to='/Home'>Home</Link></li>
                        <li className='liHomeScreen'><Link to='/People'>People</Link></li>
                        <li className='liHomeScreen'><Link to='/Business'>Business</Link></li>
                        <li className='liHomeScreen'><Link to='/Login'>Login</Link></li>
                    </ul>
                </div>
                <div className='phraseMark'>
                    <p className='text1'>Make your dreams</p>
                   
                    <p className='text2'>come true</p>
                </div>
            </div>
        </div>
    )
}
