import React, { Fragment, useState } from 'react';

import PlusIcon from '../UI/PlusIcon';
import MinusIcon from '../UI/MinusIcon';
import CartIcon from '../UI/CartIcon';
import Button from '../UI/Button';

import classes from './ProductForm.module.css';

function ProductForm(props) {
	const [inputValue, setInputValue] = useState(0);
	const [formIsValid, setFormIsValid] = useState(true);

	const changeInputHandler = event => {
		setInputValue(event.target.value);
	};

	const increaseValueHandler = () => {
		setInputValue(prevValue => +prevValue + 1);
	};

	const decreaseValueHandler = () => {
		setInputValue(prevValue => +prevValue - 1);
	};

	const submitFormHandler = event => {
		event.preventDefault();

		console.log('form is submitted');

		if (inputValue <= 0 || inputValue > 5) {
			setFormIsValid(false);
			return;
		}

		setFormIsValid(true);
		props.onAddToCart(inputValue);
	};

	return (
		<Fragment>
			<form className={classes['form']} onSubmit={submitFormHandler}>
				<div className={classes['form__control']}>
					<button
						type='button'
						aria-labelledby='Decrease Amount'
						onClick={decreaseValueHandler}>
						<MinusIcon className={classes['form__minus-svg']} />
					</button>
					<input type='text' value={inputValue} onChange={changeInputHandler} />
					<button
						type='button'
						aria-labelledby='Increase Amount'
						onClick={increaseValueHandler}>
						<PlusIcon className={classes['form__plus-svg']} />
					</button>
				</div>
				<div className={classes['form__control']}>
					<Button type='submit'>
						<CartIcon className={classes['form__cart-svg--white']} />
						<span>Add To Cart</span>
					</Button>
				</div>
			</form>
			{!formIsValid && (
				<p className={classes.error}>Please Enter A Valid Amount (1 to 5)</p>
			)}
		</Fragment>
	);
}

export default ProductForm;
