import CartElement from '../CartElement/CartElement';
import {
	StyledBoxCart,
	StyledCartTitle,
	StyledImageEmpty
} from './cart.styles';

const Cart = ({ cart }) => {
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
						key={element.id}
						name={element.name}
						quantity={element.quantity}
						price={element.price}
						total={element.price * element.quantity}
						onRemove={() => console.log(`Remove item with id ${element.id}`)}
					/>
				))
			)}
		</StyledBoxCart>
	);
};

export default Cart;
