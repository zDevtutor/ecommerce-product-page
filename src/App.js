import { Fragment } from 'react';

import Header from './components/layout/Header';

import Product from './components/product/Product';
import { useState } from 'react';

function App() {
	const [itemAmount, setItemAmount] = useState(0);

	const addToCartHandler = amount => {
		setItemAmount(amount);
	};

	const removeFromCartHandler = () => {
		setItemAmount(0);
	};

	return (
		<Fragment>
			<Header itemAmount={itemAmount} onRemoveItem={removeFromCartHandler} />
			<Product onAddToCart={addToCartHandler} />
		</Fragment>
	);
}

export default App;
