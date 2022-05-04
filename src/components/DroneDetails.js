import { BsFillPlusCircleFill } from "react-icons/bs";
import camera from "../assets/imagens/camera.png";
import logo from "../assets/imagens/logo.png";
import remote from "../assets/imagens/remote.png";
import { StyledIconDetail } from "./styles/Drone.styled";
import Carousel, { CarouselItem } from "./Carousel";

export const DroneDetails = ({showPart, imagesDetail}) => {  

  const handleOver = (part) => {
    showPart({ ...imagesDetail, [part]: true });
  };

  const handleOut = (part) => {
    showPart({ ...imagesDetail, [part]: false });
  };

  return (
    <div>
      <Carousel mobile="on">
        <CarouselItem>
          <img src={camera} style={{ width: "50%" }} />
        </CarouselItem>
        <CarouselItem>
          <img src={logo} style={{ width: "50%" }} />
        </CarouselItem>
        <CarouselItem>
          <img src={remote} style={{ width: "50%" }} />
        </CarouselItem>
      </Carousel>

      <StyledIconDetail
        selected={imagesDetail.propellerRight}
        position="right"
        mobile="off"
      >
        <BsFillPlusCircleFill
          onMouseOver={() => {
            handleOver("propellerRight");
          }}
          onMouseLeave={() => {
            handleOut("propellerRight");
          }}
        />
      </StyledIconDetail>

      <StyledIconDetail
        selected={imagesDetail.propellerLeft}
        position="left"
        mobile="off"
      >
        <BsFillPlusCircleFill
          onMouseOver={() => {
            handleOver("propellerLeft");
          }}
          onMouseLeave={() => {
            handleOut("propellerLeft");
          }}
        />
      </StyledIconDetail>
      <StyledIconDetail
        selected={imagesDetail.camera}
        position="bottom"
        mobile="off"
      >
        <BsFillPlusCircleFill
          onMouseOver={() => {
            handleOver("camera");
          }}
          onMouseLeave={() => {
            handleOut("camera");
          }}
        />
      </StyledIconDetail>
      <StyledIconDetail
        selected={imagesDetail.accelerometer}
        position="top"
        mobile="off"
      >
        <BsFillPlusCircleFill
          onMouseOver={() => {
            handleOver("accelerometer");
          }}
          onMouseLeave={() => {
            handleOut("accelerometer");
          }}
        />
      </StyledIconDetail>
    </div>
  );
}

export default DroneDetails;