import {
	StyledBoxButtonAddCart,
	StyledBoxButtonEditCart,
	StyledDecreIncre,
	StyledElementsBox,
	StyledImageButton,
	StyledImageProduct,
	StyledInfoElement,
	StyledName,
	StyledPrice,
	StyledType
} from './element.styles';

const Element = ({
	name,
	imgDesktop,
	imgMobile,
	imgTablet,
	price,
	title,
	cart,
	setCart,
	dessert,
	showButton,
	dessertQuantity
}) => {
	// const cartItem = cart.find(item => item.id === id);
	// const quantity = cartItem ? cartItem.quantity : 0;

	return (
		<StyledElementsBox>
			<StyledImageButton>
				<StyledImageProduct>
					<picture>
						<source srcSet={imgDesktop} media='(min-width: 1040px)' />
						<source srcSet={imgTablet} media='(min-width: 768px)' />
						<source srcSet={imgMobile} media='(min-width: 375px)' />
						<img src={imgMobile} alt='' />
					</picture>
				</StyledImageProduct>
				{!showButton ? (
					<StyledBoxButtonAddCart
						onClick={() => addToCart(setCart, dessert, cart)}
					>
						<img src='assets/images/icon-add-to-cart.svg' alt='' />
						Add to Cart
					</StyledBoxButtonAddCart>
				) : (
					// MOSTRAMOS EL OTRO BOTON SI EL ESTADO ESTA TRUE
					<StyledBoxButtonEditCart>
						<StyledDecreIncre
							onClick={() => decrementItem(setCart, dessert, cart)}
							src='assets/images/icon-decrement-quantity.svg'
						/>
						<p>{dessertQuantity}</p>
						<StyledDecreIncre
							onClick={() => incrementItem(setCart, dessert, cart)}
							src='assets/images/icon-increment-quantity.svg'
						/>
					</StyledBoxButtonEditCart>
				)}
			</StyledImageButton>
			<StyledInfoElement>
				<StyledType>{title}</StyledType>
				<StyledName>{name}</StyledName>
				<StyledPrice>${price}</StyledPrice>
			</StyledInfoElement>
		</StyledElementsBox>
	);
};

// Funciones para manejar los clics
const addToCart = (setCart, dessert, cart) => {
	setCart([...cart, { ...dessert, quantity: 1 }]);
};

const incrementItem = (setCart, dessert, cart) => {
	setCart(
		cart.map(item =>
			item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
		)
	);
	// setQuantity(quantity + 1);
};
const decrementItem = (setCart, dessert, cart) => {
	setCart(
		cart
			.map(item => {
				if (item.id === dessert.id && item.quantity >= 1) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			})
			.filter(item => item.quantity > 0)
	);
	// quantity > 1 ? setQuantity(quantity - 1) : setActive(false);
};

export default Element;
