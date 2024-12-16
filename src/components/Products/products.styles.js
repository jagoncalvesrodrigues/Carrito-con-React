import styled from "styled-components";

const StyledProducts = styled.div`

    @media screen and (width>=768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;  
    }
    @media screen and (width>=1440px) {
        grid-column: 1/3;
    }
`;

export {StyledProducts};