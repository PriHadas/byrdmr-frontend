import styled from "styled-components";

export const StyledHomePresentation = styled.section`
  background-color: ${({ theme }) => theme.colors.isabelline};
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ProductPresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
`;


export const StyledCamera = styled.section`
  background-color: #040404;
  color: white;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 100vh;


`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: ${({ mobile }) => mobile};
  }
`;

export const StyledProductDetails = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

