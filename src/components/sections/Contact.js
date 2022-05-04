import Form from "../Form";
import { StyledHomePresentation } from "../styles/Home.styled";

export const Contact = ({onScreen}) => {
    return (
      <div ref={onScreen}>
        <StyledHomePresentation id="contact">
          <div style={{ marginTop: "250px" }}>
            <h1>Contact</h1>
            <Form />
          </div>
        </StyledHomePresentation>
      </div>
    );
}