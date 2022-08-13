import React from 'react';

import classes from './CartItem.module.css';

import product1Thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../../assets/images/icon-delete.svg';
import Button from '../UI/Button';

function CartItem(props) {
	const removeItemHandler = () => {
		props.onRemoveItem(props.productAmount);
	};

	return (
		<div className={classes['cart__item']}>
			<div className={classes['cart__item-img']}>
				<img src={product1Thumbnail} alt='img thumb' />
			</div>
			<div className={classes['cart__item-desc']}>
				<p>Fall Limited Edition Sneakers</p>
				<p>
					$125.00 x {props.productAmount}
					<span className={classes['cart__total-price']}>{`$${
						props.productAmount * 125
					}.00`}</span>
				</p>
			</div>
			<button className={classes['cart__item-delete']}>
				<img onClick={removeItemHandler} src={deleteIcon} alt='Delete Icon' />
			</button>
			<Button className={classes['cart__btn']}>Checkout</Button>
		</div>
	);
}

export default CartItem;
