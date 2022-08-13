import React, { useState, useRef } from 'react';

import PlusIcon from '../UI/PlusIcon';
import MinusIcon from '../UI/MinusIcon';
import CartIcon from '../UI/CartIcon';
import Button from '../UI/Button';

import classes from './ProductForm.module.css';

function ProductForm(props) {
	const [inputValue, setInputValue] = useState(0);

	const inputRef = useRef();

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

		props.onAddToCart(inputValue);
	};

	return (
		<form className={classes['form']} onSubmit={submitFormHandler}>
			<div className={classes['form__control']}>
				<button type='button' onClick={decreaseValueHandler}>
					<MinusIcon className={classes['form__minus-svg']} />
				</button>
				<input
					ref={inputRef}
					type='number'
					min='1'
					max='5'
					step='1'
					value={inputValue}
					onChange={changeInputHandler}
				/>
				<button type='button' onClick={increaseValueHandler}>
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
	);
}

export default ProductForm;
