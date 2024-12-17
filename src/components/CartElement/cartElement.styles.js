import styled from "styled-components";

const StyledBoxElementCart = styled.div`
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    border-radius: 12px;
`;
const StyledItem = styled.div`
    font-size: 14px;
    line-height: auto;
    font-weight: 700;
    display: flex;
    flex-direction: column;
`;
const StyledName = styled.p`
    margin: 0;
`;
const StyledQuantityProduct = styled.div`
    display: flex;
    height: 19px;
    `;
const StyledQuantity = styled.p`
    margin-right: 8px;
    color:#C73B0F;
`;
const StyledPrice = styled.p`
    color: #87635A;
    font-weight: 400;
    margin-right: 8px;
`;
const StyledTotal = styled.p`
    color: #87635A;
`;
const StyledRemoveItem = styled.img`
    width: 20px;
    height: 20px;
    border: 1px solid #ad8a85;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
`;
const StyledLine = styled.div`
    width: 100%;
    height: 1px;
    border: 1px solid #f5eeec;
    margin-top: 16px;
    margin-bottom: 16px;
`;

export {StyledTotal,StyledBoxElementCart,StyledItem,StyledLine,StyledName,StyledPrice,StyledQuantity,StyledQuantityProduct,StyledRemoveItem}
