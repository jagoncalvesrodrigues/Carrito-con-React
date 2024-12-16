import { StyledBox, StyledButton } from './filters.styles';

const Filters = ({ setFilter }) => {
	return (
		<StyledBox>
			<StyledButton onClick={() => setFilter('default')}>Default</StyledButton>
			<StyledButton onClick={() => setFilter('name')}>Name</StyledButton>
			<StyledButton onClick={() => setFilter('price')}>Price</StyledButton>
		</StyledBox>
	);
};
export default Filters;
