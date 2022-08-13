import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ProductDescription from './ProductDescription';
import ProductLayout from './ProductLayout';
import ProductLayoutModal from './ProductLayoutModal';

import classes from './Product.module.css';

function Product(props) {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(true);
	};

	const hideModalHandler = () => {
		setShowModal(false);
	};

	return (
		<main className={classes.product}>
			{showModal &&
				ReactDOM.createPortal(
					<ProductLayoutModal onClose={hideModalHandler} />,
					document.getElementById('overlays')
				)}
			<ProductLayout onImgClick={showModalHandler} />
			<ProductDescription onAddToCart={props.onAddToCart} />
		</main>
	);
}

export default Product;
