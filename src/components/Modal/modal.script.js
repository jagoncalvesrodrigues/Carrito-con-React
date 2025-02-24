import styled from "styled-components";

const StyledModalBox = styled.div`
    width: 100%;
    height: 717px;
    background-color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    z-index: 4;
    padding: 40px 24px 24px 24px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media screen and (width>=768px) {
    width: 688px;
    height: 685px;
    top: 50%; 
    left: 50%; 
    /*Ajusta la posición del elemento moviéndolo hacia atrás por el 50% de su propio tamaño, 
    tanto en el eje X como en el eje Y, para centrarlo perfectamente. */
    transform: translate(-50%, -50%);
    }
    @media screen and (width>=1440px) {
        width: 592px;
    }

`;
const StyledTextBox = styled.div`
    margin-bottom: 32px;
`;
const StyledCheckImage = styled.img`
    margin-bottom: 24px;
`;
const StyledBoxSecundary = styled.div`
    font-size: 40px;
    font-weight: 800;
    line-height: auto;
    color: #260F08;
`;
const StyledTextConfirmed = styled.p`
`;
const StyledSecondTextConfirmed = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: auto;
    color: #87635A;
`;
const StyledBackGround = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {StyledBackGround,StyledTextConfirmed,StyledBoxSecundary,StyledCheckImage,StyledModalBox,StyledSecondTextConfirmed,StyledTextBox}