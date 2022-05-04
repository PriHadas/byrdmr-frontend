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


export const StyledTextDescription = styled.div`
  font-family: ArchivoMedium;
  text-align: start;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    order: ${({ orderMobile }) => orderMobile};
  }
`;

export const Title = styled.h2`
  font-family: ArchivoBold;
`;


export const Description = styled.div`
  font-family: ArchivoRegular;
`;

export const Rectangle = styled.span`
  background-color: #ec5a22;
  display: block;
  width: 50px;
  height: 3px;
  margin-bottom: 5px;
`;