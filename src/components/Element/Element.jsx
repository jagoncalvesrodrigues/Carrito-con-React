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
	active,
	setActive,
	quantity,
	setQuantity
}) => {
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
				{!active ? (
					<StyledBoxButtonAddCart
						onClick={() => handleAddToCart(setActive, setQuantity)}
					>
						<img src='assets/images/icon-add-to-cart.svg' alt='' />
						Add to Cart
					</StyledBoxButtonAddCart>
				) : (
					// MOSTRAMOS EL OTRO BOTON SI EL ESTADO ESTA TRUE
					<StyledBoxButtonEditCart>
						<StyledDecreIncre
							onClick={() => decrementItem(setQuantity, quantity, setActive)}
							src='assets/images/icon-decrement-quantity.svg'
						/>
						<p>{quantity}</p>
						<StyledDecreIncre
							onClick={() => incrementItem(setQuantity, quantity)}
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
const handleAddToCart = (setActive, setQuantity) => {
	setActive(true);
	setQuantity(1); // Establecer cantidad inicial al agregar al carrito
};

const incrementItem = (setQuantity, quantity) => {
	setQuantity(quantity + 1);
};
const decrementItem = (setQuantity, quantity, setActive) => {
	quantity > 1 ? setQuantity(quantity - 1) : setActive(false);
};
export default Element;
