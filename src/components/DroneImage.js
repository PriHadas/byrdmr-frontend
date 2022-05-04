import styled from "styled-components";
import drone from "../assets/imagens/drone.png";
import shadow from "../assets/imagens/shadow.png";
import { ColumCenter } from "./styles/Positions.styled";

export const DroneImage = () => {
  return (
    <ColumCenter>
      <StyledImage src={drone} />
      <StyledImage src={shadow} />
    </ColumCenter>
  );
};

const StyledImage = styled.img`
  src: ${(src) => src};
  width: 300px;
`;
