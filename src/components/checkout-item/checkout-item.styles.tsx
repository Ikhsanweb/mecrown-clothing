import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding: 7px;

  @media screen and (max-width: 800px) {
    padding: 2px;
    padding-right: 10px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const QuanPrice = styled.div`
  /* background-color: aqua; */
  margin-left: -30px;
`;

export const Price = styled.span`
  /* width: 23%; */
  display: flex;
  font-weight: 600;
  justify-content: center;

  @media screen and (max-width: 800px) {
    font-weight: 500;
    font-size: 15px;
  }
`;

export const Quantity = styled(Price)`
  margin-top: 10px;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 25px;
`;

export const Value = styled.span`
  margin: 0 15px;
  @media screen and (max-width: 800px) {
    margin: 0 5px;
  }
`;
export const Name = styled.span`
  width: 23%;
  font-weight: 600;
  margin-left: -70px;
  /* margin-right: 5px; */
  /* background-color: red; */

  @media screen and (max-width: 800px) {
    font-weight: 500;
    font-size: 15px;
    margin-left: -30px;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-right: 30px;

  @media screen and (max-width: 800px) {
    margin-right: 15px;
  }
`;
