import styled from "styled-components";

export const StyledMenu = styled.div`
  background-color: ${({theme}) => theme.colors.halloweenOrange};
  height: 100vh;
`;

export const ItemMenu = styled.div`
  font-family: ArchivoMedium;
  font-size: 40px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    margin: 20px;
  }
`;

export const StyledCloseBotton = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 30px;
  padding-top: 30px;
  color: ${({ theme }) => theme.colors.white};
`;


export const StyledSocialIcons = styled.div`
  position: absolute;
  top: 20px;
  display: none;
`;


