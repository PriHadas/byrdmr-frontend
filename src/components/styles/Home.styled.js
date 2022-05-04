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

  @media (max-width: ${({ theme }) => `${theme.mobileSize}px` }) {
    flex-direction: ${({ mobile }) => mobile};
  }
`;

export const StyledProductDetails = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${({ theme }) => `${theme.mobileSize}px`}) {
    flex-direction: column;
  }
`;


export const StyledScrollbar = styled.div`
  position: fixed;
  left: 10;
  right: 0;
  top: 50%;

  display: ${({ sectionActive, totalSections }) => {
    return sectionActive === 0 || sectionActive === totalSections - 1
      ? "none"
      : "block";
  }};

  span {
    display: block;
    width: 30px;
    height: 3px;
    margin-bottom: 5px;
    position: relative;

    background-color: ${({ theme }) => theme.colors.halloweenOrange};
    border-radius: 6px;

    transform: rotate(90deg);
    margin: 30px;
  }

  span:nth-child(1) {
    background-color: ${({ sectionActive, theme }) =>
      sectionActive == 1
        ? theme.colors.lightSilver
        : theme.colors.halloweenOrange}};
  }
  span:nth-child(2) {
    background-color: ${({ sectionActive, theme }) =>
      sectionActive == 2
        ? theme.colors.lightSilver
        : theme.colors.halloweenOrange}
  }
  span:nth-child(3) {
    background-color: ${({ sectionActive, theme }) =>
      sectionActive == 3
        ? theme.colors.lightSilver
        : theme.colors.halloweenOrange}
        
  }
`
