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

const StyledBoxOrder = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    line-height: auto;
    align-items: center;
`;
const StyledTextOrder = styled.p`
`;
const StyledTotalOrder = styled.p`
    font-size: 24px;
    font-weight: 700;
    line-height: auto;
`;
const StyledCarbonNeutral = styled.div`
    background-color: #fcf8f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 24px;
`;
const StyledImageCarbon = styled.img`
`;
const StyledTextCarbon = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: auto;
    margin-left: 8px;
`;
const StyledTotalButton = styled.button`
    border-style: none;
    background-color: #C73B0F;
    width: 100%;
    height: 53px;
    color: white;
    border-radius: 999px;
    font-weight: 600;
    font-size: 16px;
    line-height: auto;
`;

export {StyledTotalButton,StyledTotalOrder,StyledTextOrder,StyledBoxOrder,StyledCarbonNeutral,StyledImageCarbon,StyledTextCarbon,StyledImageEmpty,StyledBoxCart, StyledCartTitle};