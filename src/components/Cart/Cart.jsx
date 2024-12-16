import {
	StyledBoxCart,
	StyledCartTitle,
	StyledImageEmpty
} from './cart.styles';

const Cart = () => {
	return (
		<StyledBoxCart>
			<StyledCartTitle>
				Your Cart <span>0</span>
			</StyledCartTitle>
			<StyledImageEmpty>
				<img src='assets/images/illustration-empty-cart.svg' alt='' />
				<p>Your added items will appear here</p>
			</StyledImageEmpty>
		</StyledBoxCart>
	);
};

export default Cart;
