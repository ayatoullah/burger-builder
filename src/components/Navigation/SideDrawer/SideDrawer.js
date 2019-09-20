import React from 'react';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/_aux/_aux';
import Dropback from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses=[classes.SideDrawer,classes.Close];
    if(props.open){
       attachedClasses=[classes.SideDrawer,classes.Open]; 
    }
    return (
        <Aux>
            <Dropback show={props.open}
            clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                
                    <nav>
                        <   NavigationItems/>
                    </nav>
            </div>
        </Aux>
        
    );
};
export default sideDrawer;