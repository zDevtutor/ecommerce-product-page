import React from 'react';
import classes from './Backdrop.module.css';

function Backdrop(props) {
	return <div onClick={props.onClick} className={classes.backdrop} />;
}

export default Backdrop;
