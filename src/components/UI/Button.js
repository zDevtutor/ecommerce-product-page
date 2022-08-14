import React from 'react';
import classes from './Button.module.css';

function Button(props) {
	return (
		<button
			onClick={props.onClick}
			aria-labelledby={props.ariaLabelledby}
			ref={props.ref}
			type={props.type || 'button'}
			className={`${classes.btn} ${props.className}`}>
			{props.children}
		</button>
	);
}

export default Button;
