import styled from "styled-components";

const StyledElementsBox = styled.div`
    min-width: 250px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledImageButton = styled.div`
    position: relative;
    margin-bottom: 16px;
`;
const StyledImageProduct = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
`;
const StyledBoxButtonAddCart = styled.button`
    position: absolute;
    width: 160px;
    height: 44px;
    /* background-color: #c73b0f; */
    background-color: white;
    border-style: none;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: -20px;
    left: calc(50% - 80px);
    padding: 12px 25px;
    border: 1px solid #AD8A85;
`;
const StyledInfoElement = styled.div`
    width: 100%;
    height: 69px;
    margin-top: 16px;
`;
const StyledType = styled.p`
    color:#87635A;
    margin: 0;
`;
const StyledName = styled.p`
    color: #260F08;
    font-size: 16px;
    font-weight: 600;
    line-height: auto;
    margin:0;
    margin-top: 4px;

`;
const StyledPrice = styled.p`
    color: #C73B0F;
    font-size: 16px;
    font-weight: 600;
    line-height: auto;
    margin:0;
    margin-top: 4px;
`;
const StyledBoxButtonEditCart = styled.button`
    position: absolute;
    width: 160px;
    height: 44px;
    background-color: #c73b0f;
    justify-content: space-around;
    color: white;
    border-style: none;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: -20px;
    left: calc(50% - 80px);
    padding: 12px 25px;
`;

const StyledDecreIncre = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 4px;
`;

export {StyledDecreIncre,StyledBoxButtonEditCart, StyledElementsBox, StyledBoxButtonAddCart, StyledImageProduct, StyledImageButton, StyledInfoElement,StyledName,StyledPrice,StyledType};