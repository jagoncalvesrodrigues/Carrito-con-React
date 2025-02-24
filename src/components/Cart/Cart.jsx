import CartElement from '../CartElement/CartElement';
import {
	StyledBoxCart,
	StyledBoxOrder,
	StyledCarbonNeutral,
	StyledCartTitle,
	StyledImageCarbon,
	StyledImageEmpty,
	StyledTextCarbon,
	StyledTextOrder,
	StyledTotalButton,
	StyledTotalOrder
} from './cart.styles';

const Cart = ({ cart, setCart }) => {
	const calculateTotal = () => {
		return cart
			.reduce((acc, item) => acc + item.price * item.quantity, 0)
			.toFixed(2);
	};

	const isEmptyCart = cart.length === 0;
	return (
		<StyledBoxCart>
			<StyledCartTitle>
				Your Cart <span>{cart.length}</span>
			</StyledCartTitle>

			{isEmptyCart ? (
				<StyledImageEmpty>
					<img
						src='assets/images/illustration-empty-cart.svg'
						alt='Empty Cart'
					/>
					<p>Your added items will appear here</p>
				</StyledImageEmpty>
			) : (
				<>
					{cart.map(element => (
						<CartElement
							removeElement={() => removeElementCart(element.id, cart, setCart)}
							key={element.id}
							name={element.name}
							quantity={element.quantity}
							price={element.price.toFixed(2)}
							total={element.price * element.quantity.toFixed(2)}
						/>
					))}
					<StyledBoxOrder>
						<StyledTextOrder>Order Total</StyledTextOrder>
						<StyledTotalOrder>${calculateTotal()}</StyledTotalOrder>
					</StyledBoxOrder>
					<StyledCarbonNeutral>
						<StyledImageCarbon src='assets/images/icon-carbon-neutral.svg' />
						<StyledTextCarbon>
							This is a <span class='carbon-neutral-bold'>carbon-neutral</span>
							delivery
						</StyledTextCarbon>
					</StyledCarbonNeutral>
					<StyledTotalButton>Confirm Order</StyledTotalButton>
				</>
			)}
		</StyledBoxCart>
	);
};

const removeElementCart = (id, cart, setCart) => {
	const updatedCart = cart.filter(item => item.id !== id);
	setCart(updatedCart);
};

export default Cart;
