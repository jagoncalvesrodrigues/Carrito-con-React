import {
	StyledBoxElementCart,
	StyledItem,
	StyledLine,
	StyledName,
	StyledPrice,
	StyledQuantity,
	StyledQuantityProduct,
	StyledRemoveItem,
	StyledTotal
} from './cartElement.styles';

const CartElement = ({ name, quantity, price, total }) => {
	return (
		<>
			<StyledBoxElementCart>
				<StyledItem>
					<StyledName>{name}</StyledName>
					<StyledQuantityProduct>
						<StyledQuantity>{quantity}x</StyledQuantity>
						<StyledPrice>@${price}</StyledPrice>
						<StyledTotal>${total}</StyledTotal>
					</StyledQuantityProduct>
				</StyledItem>
				<StyledRemoveItem src='assets/images/icon-remove-item.svg' alt='' />
			</StyledBoxElementCart>
			<StyledLine />
		</>
	);
};

export default CartElement;
