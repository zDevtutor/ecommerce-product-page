import React from 'react';

import ProductForm from './ProductForm';

import classes from './ProductDescription.module.css';

function ProductDescription(props) {
	return (
		<section className={classes['product__description']}>
			<h2 className={classes['product__company']}>Sneaker Company</h2>
			<h3 className={classes['product__title']}>
				Fall Limited Edition Sneakers
			</h3>
			<p className={classes['product__desc']}>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer.
			</p>
			<h4 className={classes['product__price']}>
				$125.00<span className={classes['product__discount']}>50%</span>
			</h4>
			<h5 className={classes['product__price--old']}>$250.00</h5>
			<div className={classes['product__order']}>
				<ProductForm onAddToCart={props.onAddToCart} />
			</div>
		</section>
	);
}

export default ProductDescription;
