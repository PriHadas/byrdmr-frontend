import PresentationSeaction from "../components/seactions/PresentationSeaction";
import NavBar from "../components/NavBar"
import { Contact } from "../components/seactions/Contact";
const Home = () => {
  return (
    <div>
      <NavBar />
      <PresentationSeaction />
      <Contact/>
    </div>
   
  );
};

export default Home;
