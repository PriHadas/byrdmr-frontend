import { StyledScrollbar } from "./styles/Home.styled";

export const Scrollbar = (props) => {

  return (
    <StyledScrollbar
      sectionActive={props.sectionActive}
      totalSections={props.totalSections}
    >
      <span />
      <span />
      <span />
    </StyledScrollbar>
  );
}

export default Scrollbar;