import { Link } from "react-router-dom";
import logo from "../assets/imagens/logo.png";
import { StyledNavBar, Logo, ItemMenuNav } from "./styles/NavBar.styled";
import HamburguerMenu from "./HamburgerMenu";
import { HashLink } from "react-router-hash-link";
import { useScrollPosition } from "../hooks/useScrollPosition";
import SocialIcons from "./SocialIcons";

export const NavBar = (props) => {

  const scrollPosition = useScrollPosition();


  return (
    <div>
      {scrollPosition > 0 ? (
        <StyledNavBar>
          <SocialIcons />
          <Logo src={logo} />
          <div>
            <HamburguerMenu openMenu={props.openMenu} />
          </div>
        </StyledNavBar>
      ) : (
        <StyledNavBar>
          <ItemMenuNav>
            <Link to="/store">STORE</Link>
            <Link to="/tutorial">TUTORIAL</Link>
          </ItemMenuNav>

          <Logo src={logo} />

          <ItemMenuNav>
            <Link to="/blog">BLOG</Link>
            <HashLink smooth to="#contact">
              CONTACT
            </HashLink>
          </ItemMenuNav>
        </StyledNavBar>
      )}
    </div>
  );
}

export default NavBar;