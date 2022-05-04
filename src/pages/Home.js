import PresentationSeaction from "../components/sections/PresentationSeaction";
import NavBar from "../components/NavBar";
import { Contact } from "../components/sections/Contact";
import Menu from "../components/sections/Menu";
import { useEffect, useRef, useState } from "react";
import { theme } from "../components/styles/theme";
import NavBarMobile from "../components/NavBarMobile";
import CameraSection from "../components/sections/CameraSection";
import RemoteSection from "../components/sections/RemoteSection";
import { ProductDetailsSeaction } from "../components/sections/ProductDetailsSeaction";
import { useIntersection } from "../hooks/useInterseaction";
import Scrollbar from "../components/Scrollbar";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [sectionActive, setSectionActive] = useState(0);

  //must be in order
  const sections = {
    presentation: useRef(null),
    detailsRef: useRef(null),
    cameraRef: useRef(null),
    remoteRef: useRef(null),
    contact: useRef(null),
  };

  const totalSections = Object.keys(sections).length;

  useIntersection(sections, setSectionActive);

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

          {pageWidth > theme.mobileSize ? (
            <Scrollbar
              sectionActive={sectionActive}
              totalSections={totalSections}
            />
          ) : null}

          <PresentationSeaction onScreen={sections.presentation} />
          <ProductDetailsSeaction onScreen={sections.detailsRef} />
          <CameraSection onScreen={sections.cameraRef} />
          <RemoteSection onScreen={sections.remoteRef} />
          <Contact onScreen={sections.contact} />
        </div>
      )}
    </div>
  );
};

export default Home;
