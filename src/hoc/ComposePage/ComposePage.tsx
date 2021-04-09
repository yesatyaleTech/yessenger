import React from 'react';
import SideNav from '../../Components/SideNav/SideNav'
import PastMessages from '../../Components/PastMessages/PastMessages'
import Compose from '../../Components/Compose/Compose'

import classes from './ComposePage.module.css'

const ComposePage = () => {
    return (
        <div className={classes.grid}>
            <SideNav/>
            <PastMessages/>
            <Compose/>
        </div>
    )
}
    

export default ComposePage;