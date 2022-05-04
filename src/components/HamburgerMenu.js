import { HamburguerMenuLine, StyledHamburger } from "./styles/NavBar.styled";

export const HamburguerMenu = (props) => {

    return (
      <StyledHamburger onClick={() => props.openMenu(true)}>
        <HamburguerMenuLine width="33" />
        <HamburguerMenuLine width="23" />
      </StyledHamburger>
    );
}

export default HamburguerMenu;