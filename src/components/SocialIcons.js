import { FaTwitter, FaFacebook } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/NavBar.styled";

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <a href="https://facebook.com">
        <FaFacebook style={{ color: "#505050" }} />
      </a>
      <a href="https://twitter.com/">
        <FaTwitter style={{ color: "#505050" }} />
      </a>
    </StyledSocialIcons>
  );
}

export default SocialIcons;
