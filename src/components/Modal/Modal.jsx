/*import { createPortal } from 'react-dom';
import CartModal from '../../CartModal/CartModal';
import {
	StyledBoxOrder,
	StyledTextOrder,
	StyledTotalButton,
	StyledTotalOrder
} from '../Cart/cart.styles';
import {
	StyledBackGround,
	StyledBoxSecundary,
	StyledCheckImage,
	StyledModalBox,
	StyledSecondTextConfirmed,
	StyledTextBox,
	StyledTextConfirmed
} from './modal.script';*/

const Modal = (/*{ cart }*/) => {
	/*const calculateTotal = () => {
		return cart
			.reduce((acc, item) => acc + item.price * item.quantity, 0)
			.toFixed(2);
	};
	return createPortal();
	<StyledBackGround>
			<StyledModalBox>
				<StyledTextBox>
					<StyledCheckImage src='assets/images/icon-order-confirmed.svg' />
					<StyledBoxSecundary>
						<StyledTextConfirmed>Order Confirmed</StyledTextConfirmed>
						<StyledSecondTextConfirmed>
							We hope you enjoy your food!
						</StyledSecondTextConfirmed>
					</StyledBoxSecundary>
				</StyledTextBox>
				{cart.map(element => (
					<CartModal
						key={element.id}
						{...cart}
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
				<StyledTotalButton>Confirm Order</StyledTotalButton>
			</StyledModalBox>
		</StyledBackGround>,
		document.getElementById('modal')*/
};

export default Modal;
