import styled from "styled-components";

const StyledBoxCart = styled.div`
    padding: 24px;
    width: 100%;
    background-color: white;
    border-radius: 12px;

    @media screen and (width>=1440px) {
    min-width: 384px;
    grid-column: 3/4;
    }
`;
const StyledCartTitle = styled.h2`
    color: #C73B0F;
    font-size: 24px;
    font-weight: 600;
    list-style: auto;
    margin-bottom: 24px;
`;

const StyledImageEmpty = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#87635A;
`;

export {StyledImageEmpty,StyledBoxCart, StyledCartTitle};