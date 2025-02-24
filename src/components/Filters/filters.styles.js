import styled from "styled-components";

const StyledBox = styled.div`
    display: flex;
    width: 268px;
    height: 34px;
    justify-content: space-between;
    font-size: 14px;
    line-height: auto;
    font-weight: 700;

    @media screen and (width>=768px) {
        width: 276px;
        margin-left: 3px;
    }

    @media screen and (width>=1440px) {
        width: 347px;
    }
`;

const StyledButton = styled.button`
    width: 77px;
    height: 100%;
    border: 1px solid #AD8A85;
    background-color: white;
    background-color: ${({ $active }) => ($active ? '#C73B0F' : '#FFFFFF')};
	color: ${({ $active }) => ($active ? '#FFFFFF' : '#260F08')};
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (width>=768px) {
        width: 80px;

    }

    @media screen and (width>=1440px) {
        width: 100px;
    }
`;
// const StyledDefault = styled.button`

// `;
// const StyledName = styled.button`

// `;
// const StyledPrice = styled.button`

// `;

export {StyledBox,StyledButton}
