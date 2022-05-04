import { Column, Row, StyledCamera } from "../styles/Home.styled";
import camera from "../../assets/imagens/camera.png";
import TextDescripition from "../TextDescription";
import { Center } from "../styles/Home.styled";
import { PaleSilverText, WhiteText } from "../styles/Texts.styled";

export const CameraSection = (props) => {
  return (
    <div ref={props.onScreen}>
      <StyledCamera>
        <Center>
          <Row mobile="column">
            <img style={{ width: "200px" }} src={camera} />
            <TextDescripition />
          </Row>
          <Row>
            <Column>
              <WhiteText
                fontSize="50"
                fontFamily="ArchivoRegular"
                mobileFontSize="35"
              >
                700
              </WhiteText>
              <PaleSilverText
                fontSize="30"
                fontFamily="ArchivoRegular"
                mobileFontSize="15"
              >
                TLV VIDEO
              </PaleSilverText>
            </Column>

            <Column>
              <WhiteText
                fontSize="50"
                fontFamily="ArchivoRegular"
                mobileFontSize="35"
              >
                120º
              </WhiteText>
              <PaleSilverText
                fontSize="30"
                fontFamily="ArchivoRegular"
                mobileFontSize="15"
              >
                VISUAL RANGE
              </PaleSilverText>
            </Column>

            <Column>
              <PaleSilverText
                fontSize="15"
                fontFamily="ArchivoRegular"
                mobileFontSize="35"
              >
                HD
              </PaleSilverText>
              <PaleSilverText
                fontSize="10"
                fontFamily="ArchivoRegular"
                mobileFontSize="15"
              >
                NIGHT VISION
              </PaleSilverText>
            </Column>
          </Row>
        </Center>
      </StyledCamera>
    </div>
  );
};

export default CameraSection;
