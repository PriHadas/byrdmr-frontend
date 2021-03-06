import styled from "styled-components";

export const ColumCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: ${({ theme }) => theme.mobileSize + 'px'}) {
    display: ${({ mobile }) => (mobile == "off" ? "none" : "flex")};
  }
`;

export const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 100vh;
`;
