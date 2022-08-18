import React, { Fragment, useState, useEffect } from 'react';

import PlusIcon from '../UI/PlusIcon';
import MinusIcon from '../UI/MinusIcon';
import CartIcon from '../UI/CartIcon';
import Button from '../UI/Button';

import classes from './ProductForm.module.css';

function ProductForm(props) {
	const [enteredAmount, setEnteredAmount] = useState(0);
	const [formIsValid, setFormIsValid] = useState(false);

	const inputIsValid = enteredAmount > 0 && enteredAmount <= 10;

	const increaseValueHandler = () => {
		setEnteredAmount(prevValue => +prevValue + 1);
	};

	const decreaseValueHandler = () => {
		setEnteredAmount(prevValue => +prevValue - 1);
	};

	useEffect(() => {
		if (inputIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [inputIsValid]);

	const submitFormHandler = event => {
		event.preventDefault();

		props.onAddToCart(enteredAmount);
	};

	const invalidClasses = formIsValid
		? classes['form__control']
		: `${classes['form__control']} ${classes['invalid']}`;

	return (
		<Fragment>
			<form className={classes['form']} onSubmit={submitFormHandler}>
				<div className={invalidClasses}>
					<button type='button' onClick={decreaseValueHandler}>
						<MinusIcon className={classes['form__minus-svg']} />
					</button>
					<input type='text' value={enteredAmount} readOnly={true} />
					<button type='button' onClick={increaseValueHandler}>
						<PlusIcon className={classes['form__plus-svg']} />
					</button>
				</div>
				<div className={classes['form__control']}>
					<Button type='submit' disabled={!formIsValid}>
						<CartIcon className={classes['form__cart-svg--white']} />
						<span>Add To Cart</span>
					</Button>
				</div>
			</form>
		</Fragment>
	);
}

export default ProductForm;
