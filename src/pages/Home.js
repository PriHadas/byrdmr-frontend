import PresentationSeaction from "../components/sections/PresentationSeaction";
import NavBar from "../components/NavBar";
import { Contact } from "../components/sections/Contact";
import Menu from "../components/sections/Menu";
import { useEffect, useState } from "react";
import {theme} from "../components/styles/theme"
import NavBarMobile from "../components/NavBarMobile";
import CameraSection from "../components/sections/CameraSection";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

 useEffect(() => {
   setPageWidth(window.innerWidth);
 });

  return (
    <div>
      {menuOpen ? (
        <Menu openMenu={setMenuOpen} />
      ) : (
        <div>
          {pageWidth > theme.mobileSize ? (
            <NavBar openMenu={setMenuOpen} />
          ) : (
            <NavBarMobile openMenu={setMenuOpen} />
          )}
          <PresentationSeaction />
          <CameraSection/>
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Home;
