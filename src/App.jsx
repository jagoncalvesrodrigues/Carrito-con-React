import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Container from './components/Container/Container';
import Element from './components/Element/Element';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import MainBox from './components/MainBox/MainBox';
import Products from './components/Products/Products';
import { ELEMENTS } from './constants/elements';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [active, setActive] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const [filter, setFilter] = useState('default');

	const filteredDesserts = filterArray(ELEMENTS, filter);

	console.log(active);
	return (
		<Container>
			<GlobalStyles />
			<Header>
				<h1>Desserts</h1>
				<Filters filter={filter} setFilter={setFilter} />
			</Header>
			<MainBox>
				<Products>
					{filteredDesserts.map(dessert => (
						<Element
							active={active}
							setActive={setActive}
							quantity={quantity}
							setQuantity={setQuantity}
							key={dessert.id}
							{...dessert}
						/>
					))}
				</Products>
				<Cart />
			</MainBox>
		</Container>
	);
};

const filterArray = (elements, filter) => {
	if (filter === 'name') {
		return [...elements].sort((a, b) => a.name.localeCompare(b.name));
	} else if (filter === 'price') {
		return [...elements].sort((a, b) => a.price - b.price);
	}
	return elements; // Default
};

export default App;
