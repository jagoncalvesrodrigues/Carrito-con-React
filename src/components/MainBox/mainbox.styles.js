import styled from "styled-components";

const StyledMainBox = styled.div`
    padding: 0 24px 28px 24px;
    z-index: 1;

    @media screen and (width>=768px) {
        padding: 0 40px 20px 40px;
    }
    @media screen and (width>=1440px) {
        display: grid;
        grid-template-columns: 2, 3fr, 1fr;
        gap: 32px;
    }
`;

export {StyledMainBox};