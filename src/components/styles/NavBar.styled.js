import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const ItemMenuNav = styled.div`
  font-family: ArchivoMedium;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #404040;
    margin: 20px;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;


export const Logo = styled.img`
  width: 30%;

  @media (min-width: 820px) {
    width: 190px;
  }
`;

export const StyledHamburger = styled.div`
  display: block;
  user-select: none;
  position: absolute;
  right: 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover span:nth-child(2) {
    transform: translateX(10px);
  }

`;

export const HamburguerMenuLine = styled.span`
  display: block;
  width: ${({ width }) => width + "px"};
  height: 3px;
  margin-bottom: 5px;
  position: relative;

  background-color: ${({ theme }) => theme.colors.halloweenOrange};
  border-radius: 6px;

  transform-origin: 0 0;

  transition: 0, 4s;
`;

export const StyledSocialIcons = styled.div`
  
  top: 20px;
`;

