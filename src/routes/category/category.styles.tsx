import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 40px;
    margin: 0 auto;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

// .category-container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
//   row-gap: 50px;

//   @media screen and (max-width: 800px) {
//     align-items: center;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//   }
// }

// .category-title {
//   font-size: 38px;
//   margin-bottom: 25px;
//   text-align: center;
// }
