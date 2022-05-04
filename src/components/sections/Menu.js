import {
  ItemMenu,
  StyledCloseBotton,
  StyledMenu,
} from "../styles/Menu.style";
import logoWhite from "../../assets/imagens/logo-all-white.png";
import { Link } from "react-router-dom";
import DroneImage from "../DroneImage";
import { Center, Column, Row } from "../styles/Home.styled";
import { Logo } from "../styles/NavBar.styled";
import { VscClose } from "react-icons/vsc";
import { HashLink } from "react-router-hash-link";

export default function Menu(props) {

  return (
    <StyledMenu>
      <StyledCloseBotton >
        <VscClose onClick={() => props.openMenu(false)} />
      </StyledCloseBotton>

      <Center style={{ height: 'auto'}}>
        <Logo src={logoWhite} />
        <Row>
          <DroneImage mobile="off" />
          <ItemMenu>
            <Column>
              <Link to="/store">STORE</Link>
              <Link to="/tutorial">TUTORIAL</Link>
              <Link to="/blog">BLOG</Link>
              <HashLink to="#contact" onClick={() => props.openMenu(false)}>
                CONTACT
              </HashLink>
            </Column>
          </ItemMenu>
        </Row>
      </Center>
    </StyledMenu>
  );
}
