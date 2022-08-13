import React from 'react';
import Backdrop from './Backdrop';

import classes from './Modal.module.css';

function Modal(props) {
	return (
		<React.Fragment>
			<Backdrop onClick={props.onHide} />
			<div className={`${classes.modal} ${props.className}`}>
				{props.children}
			</div>
			;
		</React.Fragment>
	);
}

export default Modal;
