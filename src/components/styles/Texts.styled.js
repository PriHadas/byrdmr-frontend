import styled from "styled-components";

export const WhiteText = styled.p`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize + "px"};
  color: ${({ theme }) => theme.colors.white};
  display: block;

  @media (max-width: ${({ theme }) => theme.mobileSize + 'px'}) {
    font-size: ${({ mobileFontSize }) => mobileFontSize + "px"};
  }
`;


export const PaleSilverText = styled.p`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize + "px"};
  color: ${({ theme }) => theme.colors.paleSilver};
  display: block;

  @media (max-width: ${({ theme }) => theme.mobileSize + "px"}) {
    font-size: ${({ mobileFontSize }) => mobileFontSize + "px"};
  }
`;
