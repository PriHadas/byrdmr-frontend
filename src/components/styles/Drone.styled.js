import styled from "styled-components";

export const StyledIconDetail = styled.div`


  svg {
    color: ${({ selected }) => (selected ? "#ec5a22" : "#404040")};
  }

  @media (max-width: ${({ theme }) => `${theme.mobileSize}px`}) {
    display: ${({ mobile }) => (mobile == "off" ? "none" : "block")};
  }
`;

export const RelativeDiv = styled.div`
  position: relative;
  margin-right: 40px;
`