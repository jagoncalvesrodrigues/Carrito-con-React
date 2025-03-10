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
import Modal from './components/Modal/Modal';

const App = () => {
	const [active, setActive] = useState(false);
	const [filter, setFilter] = useState('default');
	const [content, setContent] = useState();
	const [cart, setCart] = useState([]);

	const filteredDesserts = filterArray(ELEMENTS, filter);

	console.log(cart);
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
							dessert={dessert}
							cart={cart}
							setCart={setCart}
							key={dessert.id}
							{...dessert}
						/>
					))}
				</Products>
				<Cart setCart={setCart} cart={cart} />
				<Modal cart={cart}>{content}</Modal>
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
	return elements;
};

export default App;
