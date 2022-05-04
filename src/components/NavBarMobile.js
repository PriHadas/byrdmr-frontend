import logo from "../assets/imagens/logo.png";
import { StyledNavBar, Logo } from "./styles/NavBar.styled";
import HamburguerMenu from "./HamburgerMenu";

export default function NavBarMobile(props) {
  return (
    <StyledNavBar>
      <Logo src={logo} />
      <div>
        <HamburguerMenu openMenu={props.openMenu} />
      </div>
    </StyledNavBar>
  );
}
