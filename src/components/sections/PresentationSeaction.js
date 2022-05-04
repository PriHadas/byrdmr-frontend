import { DroneImage } from "../DroneImage";
import { StyledHomePresentation as MainStyledPage } from "../styles/Home.styled";
import { ColumCenter, ContentCenter } from "../styles/Positions.styled";
import { PaleSilverText, WhiteText } from "../styles/Texts.styled";

const PresentationSeaction = () => {
    return (
      <MainStyledPage>
        <ColumCenter >
          <ContentCenter style={{marginTop: '150px'}}>
            <DroneImage />
            <WhiteText
              fontSize="190"
              fontFamily="ArchivoBold"
              mobileFontSize="100"
            >
              F-210
            </WhiteText>
            <PaleSilverText fontSize="30" fontFamily="ArchivoBold">
              "The fastest drone on the planet"
            </PaleSilverText>
            <PaleSilverText fontSize="15" fontFamily="ArchivoBold">
              The - The Wirecutter
            </PaleSilverText>
          </ContentCenter>
        </ColumCenter>
      </MainStyledPage>
    );
}

export default PresentationSeaction;