import {
	StyledBoxElementCart,
	StyledItem,
	StyledLine,
	StyledQuantity,
	StyledQuantityProduct,
	StyledTotal
} from '../components/CartElement/cartElement.styles';
import { StyledName, StyledPrice } from '../components/Element/element.styles';

const CartModal = ({ name, quantity, price, total }) => {
	return (
		<>
			<StyledBoxElementCart>
				<StyledItem>
					<StyledName>{name}</StyledName>
					<StyledQuantityProduct>
						<StyledQuantity>{quantity}x</StyledQuantity>
						<StyledPrice>@${price}</StyledPrice>
					</StyledQuantityProduct>
				</StyledItem>
				<StyledTotal>${total}</StyledTotal>
			</StyledBoxElementCart>
			<StyledLine />
		</>
	);
};

export default CartModal;
