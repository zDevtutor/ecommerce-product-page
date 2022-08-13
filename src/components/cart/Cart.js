import React from 'react';

import classes from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {
	return (
		<div className={classes.cart}>
			<h3 className={classes['cart__heading']}>Cart</h3>
			<div className={classes['cart__body']}>
				{props.itemAmount > 0 ? (
					<CartItem
						productAmount={props.itemAmount}
						onRemoveItem={props.onRemoveItem}
					/>
				) : (
					<p>Your Cart Is Empty</p>
				)}
			</div>
		</div>
	);
}

export default Cart;
