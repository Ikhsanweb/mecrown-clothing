import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
  margin-top: 70px;

  @media screen and (max-width: 800px) {
    margin-top: 90px;
    flex-direction: column;
    width: 90%;
    /* background-color: darkmagenta; */
  }
`;
