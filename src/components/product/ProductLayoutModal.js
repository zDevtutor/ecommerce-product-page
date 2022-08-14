import React, { useState, useEffect, useMemo } from 'react';

import Modal from '../UI/Modal';
import CloseIcon from '../UI/CloseIcon';
import NextIcon from '../UI/NextIcon';
import PreviousIcon from '../UI/PreviousIcon';

import classes from './ProductLayoutModal.module.css';

import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';

import product1Thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import product2Thumbnail from '../../assets/images/image-product-2-thumbnail.jpg';
import product3Thumbnail from '../../assets/images/image-product-3-thumbnail.jpg';
import product4Thumbnail from '../../assets/images/image-product-4-thumbnail.jpg';

function ProductLayoutModal(props) {
	const [imgIndex, setImgIndex] = useState(0);
	const [product, setProduct] = useState(product1);

	const mainImgs = useMemo(() => {
		return [product1, product2, product3, product4];
	}, []);

	useEffect(() => {
		setProduct(mainImgs[imgIndex]);
	}, [imgIndex, mainImgs]);

	const increaseMainImgHandler = () => {
		if (imgIndex >= 0 && imgIndex < mainImgs.length - 1) {
			setImgIndex(prevValue => prevValue + 1);
		} else {
			setImgIndex(0);
		}
	};

	const decreaseMainImgHandler = () => {
		if (imgIndex <= 0) {
			setImgIndex(() => mainImgs.length - 1);
		} else {
			setImgIndex(prevValue => prevValue - 1);
		}
	};

	return (
		<Modal onHide={props.onClose}>
			<div className={classes['product-modal__close']}>
				<CloseIcon
					className={classes['product-modal__close-icon']}
					onClick={props.onClose}
				/>
			</div>
			<div className={classes['product__arrows']}>
				<button
					className={classes['left-arrow']}
					onClick={decreaseMainImgHandler}>
					<PreviousIcon className={classes['left-arrow__svg']} />
				</button>
				<button
					className={classes['right-arrow']}
					onClick={increaseMainImgHandler}>
					<NextIcon className={classes['right-arrow__svg']} />
				</button>
			</div>
			<div className={classes['product__layout']}>
				<div className={classes['product__img-main']}>
					<img src={product} alt='Product 1' />
				</div>
				<button
					onClick={() => setProduct(product1)}
					className={`${classes['product__img-thumb']} ${
						product === product1 ? classes.active : ''
					}`}>
					<img src={product1Thumbnail} alt='Product 1 Thumbnail' />
				</button>
				<button
					onClick={() => setProduct(product2)}
					className={`${classes['product__img-thumb']} ${
						product === product2 ? classes.active : ''
					}`}>
					<img src={product2Thumbnail} alt='Product 2 Thumbnail' />
				</button>
				<button
					onClick={() => setProduct(product3)}
					className={`${classes['product__img-thumb']} ${
						product === product3 ? classes.active : ''
					}`}>
					<img src={product3Thumbnail} alt='Product 3 Thumbnail' />
				</button>
				<button
					onClick={() => setProduct(product4)}
					className={`${classes['product__img-thumb']} ${
						product === product4 ? classes.active : ''
					}`}>
					<img src={product4Thumbnail} alt='Product 4 Thumbnail' />
				</button>
			</div>
		</Modal>
	);
}

export default ProductLayoutModal;
