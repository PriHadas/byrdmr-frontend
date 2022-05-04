import { useState } from "react";
import DroneDetails from "../DroneDetails";
import DroneImage from "../DroneImage";
import camera from "../../assets/imagens/camera.png";
import { StyledProductDetails } from "../styles/Home.styled";
import TextDescripition from "../TextDescription";
import { RelativeDiv } from "../styles/Drone.styled";
import drone from "../../assets/imagens/drone.png";
import logo from "../../assets/imagens/logo.png";
import remote from "../../assets/imagens/remote.png";

export const ProductDetailsSeaction = (props) => {

  const [imagesDetail, setImagesDetail] = useState({
    propellerRight: false,
    propellerLeft: false,
    camera: false,
    accelerometer: false,
  });


    return (
      <div ref={props.onScreen}>
        <StyledProductDetails mobile="off">
          <TextDescripition orderMobile="2" />
          {imagesDetail.propellerRight && (
            <img src={drone} style={{ width: "300px" }} />
          )}
          {imagesDetail.propellerLeft && <img src={logo} />}
          {imagesDetail.camera && <img src={remote} />}
          {imagesDetail.accelerometer && <img src={camera} />}
          <RelativeDiv>
            <DroneImage mobile="off" />
            <DroneDetails
              showPart={setImagesDetail}
              imagesDetail={imagesDetail}
            />
          </RelativeDiv>
        </StyledProductDetails>
      </div>
    );
}