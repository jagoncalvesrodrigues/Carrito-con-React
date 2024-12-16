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

export {StyledBoxCart};