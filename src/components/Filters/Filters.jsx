import { StyledBox, StyledButton } from './filters.styles';

const Filters = ({ setFilter, filter }) => {
	return (
		<StyledBox>
			<StyledButton
				onClick={() => setFilter('default')}
				$active={filter === 'default'}
			>
				Default
			</StyledButton>
			<StyledButton
				onClick={() => setFilter('name')}
				$active={filter === 'name'}
			>
				Name
			</StyledButton>
			<StyledButton
				onClick={() => setFilter('price')}
				$active={filter === 'price'}
			>
				Price
			</StyledButton>
		</StyledBox>
	);
};
export default Filters;
