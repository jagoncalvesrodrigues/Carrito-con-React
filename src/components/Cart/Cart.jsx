import CartElement from '../CartElement/CartElement';
import {
	StyledBoxCart,
	StyledCartTitle,
	StyledImageEmpty
} from './cart.styles';

const Cart = ({ cart, setCart }) => {
	return (
		<StyledBoxCart>
			<StyledCartTitle>
				Your Cart <span>{cart.length}</span>
			</StyledCartTitle>

			{cart.length === 0 ? (
				<StyledImageEmpty>
					<img
						src='assets/images/illustration-empty-cart.svg'
						alt='Empty Cart'
					/>
					<p>Your added items will appear here</p>
				</StyledImageEmpty>
			) : (
				cart.map(element => (
					<CartElement
						removeElement={() => removeElementCart(element.id, cart, setCart)}
						key={element.id}
						name={element.name}
						quantity={element.quantity}
						price={element.price}
						total={element.price * element.quantity}
					/>
				))
			)}
		</StyledBoxCart>
	);
};

const removeElementCart = (id, cart, setCart) => {
	const updatedCart = cart.filter(item => item.id !== id);
	setCart(updatedCart);
};

export default Cart;
