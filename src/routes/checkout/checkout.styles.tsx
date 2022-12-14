import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  margin-top: 120px;

  @media screen and (max-width: 800px) {
    width: 80%;
    align-items: flex-start;
    min-height: 60vh;
    margin-top: 80px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  /* width: 23%; */

  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    &:nth-child(2) {
      margin-left: -20px;
    }
    &:nth-child(4) {
      margin-left: -20px;
      width: 14%;
    }
    &:last-child {
      width: 15%;
    }
  }

  @media screen and (max-width: 800px) {
    width: 23%;
    font-size: 13px;
    margin-left: -5px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`;
