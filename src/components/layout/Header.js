import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Cart from '../cart/Cart';
import CartIcon from '../UI/CartIcon';
import Backdrop from '../UI/Backdrop';
import CloseIcon from '../UI/CloseIcon';

import classes from './Header.module.css';

import logo from '../../assets/images/logo.svg';
import profilePic from '../../assets/images/image-avatar.png';
import NavIcon from '../../assets/images/icon-menu.svg';

function Header(props) {
	const [isHamburger, setIsHamburger] = useState(false);
	const [cartIsShown, setCartIsShown] = useState(false);

	const showMenuHandler = () => {
		setIsHamburger(true);
		setCartIsShown(false);
	};

	const hideMenuHandler = () => {
		setIsHamburger(false);
	};

	const ShowCartHandler = () => {
		setCartIsShown(!cartIsShown);
	};

	return (
		<header className={classes.header}>
			<div className={classes['header__logo']}>
				<a href='index.html'>
					<img src={logo} alt='Sneakers Logo' />
				</a>
			</div>
			<div className={classes['header__navigation']}>
				{isHamburger &&
					ReactDOM.createPortal(
						<Backdrop />,
						document.getElementById('overlays')
					)}
				{!isHamburger && (
					<button
						className={classes['header__menu-icon']}
						onClick={showMenuHandler}>
						<img src={NavIcon} alt='Navigation menu icon' />
					</button>
				)}
				{isHamburger && (
					<button
						className={classes['header__close-icon']}
						onClick={hideMenuHandler}>
						<CloseIcon className={classes['header__close-svg']} />
					</button>
				)}

				<nav
					className={`${classes['header__nav']} ${
						isHamburger ? classes.hide : ''
					}`}>
					<ul>
						<li>
							<a href='index.html'>Collections</a>
						</li>
						<li>
							<a href='index.html'>Men</a>
						</li>
						<li>
							<a href='index.html'>Women</a>
						</li>
						<li>
							<a href='index.html'>About</a>
						</li>
						<li>
							<a href='index.html'>Contact</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className={classes.user}>
				<div className={classes['cart-icon']}>
					{props.itemAmount !== 0 && (
						<div className={classes['cart-icon__badge']}>
							{props.itemAmount}
						</div>
					)}
					<button
						className={classes['cart-icon__btn']}
						onClick={ShowCartHandler}>
						<CartIcon className={classes['cart-icon__svg']} />
					</button>
				</div>

				{cartIsShown && (
					<Cart
						itemAmount={props.itemAmount}
						onRemoveItem={props.onRemoveItem}
					/>
				)}

				<img
					className={classes['user__gravatar']}
					src={profilePic}
					alt='Avatar'
				/>
			</div>
		</header>
	);
}

export default Header;
