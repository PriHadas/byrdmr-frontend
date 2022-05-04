import { StyledProductDetails } from "../styles/Home.styled";
import TextDescripition from "../TextDescription";
import remote from "../../assets/imagens/remote.png";


export const RemoteSection = (props) => {
    return (
      <div ref={props.onScreen}>
        <StyledProductDetails>
          <TextDescripition />
          <img style={{ width: "200px" }} src={remote} />
        </StyledProductDetails>
      </div>
    );
}

export default RemoteSection;