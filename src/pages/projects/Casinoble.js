// GRAPHIC ELEMENTS - - - - - - -
import basketball from "../../assets/projects/casinoble/basketball.png";
import csgo from "../../assets/projects/casinoble/csgo.png";
import boxing from "../../assets/projects/casinoble/boxing.png";
import ufc from "../../assets/projects/casinoble/ufc.png";
import golf from "../../assets/projects/casinoble/golf.png";
import instantWithdraw from "../../assets/projects/casinoble/instant-withdraw.png";
import crypto from "../../assets/projects/casinoble/crypto-casinos.png";
import visa from "../../assets/projects/casinoble/visa-casinos.png";
import mastercard from "../../assets/projects/casinoble/mastercard.png";
import playsafe from "../../assets/projects/casinoble/playsafe.png";
import male from "../../assets/projects/casinoble/male.png";
import maleTwo from "../../assets/projects/casinoble/male2.png";
import female from "../../assets/projects/casinoble/female.png";
import cryptoimg from "../../assets/projects/casinoble/crypto.png";
import introLogo from "../../assets/projects/casinoble/Intro-logo.mp4";
// COMPONENTS - - - - - - -
import * as UI from "./PageTemplateUI";
import PageTemplate from "./PageTemplate";

const Casinoble = (props) => {
  return (
    <PageTemplate project={props.project}>
      <div>
        <UI.Image
          className="graphic-item m-0"
          alt="basketball"
          src={basketball}
        />
        <UI.SmallLabel>Basketball Betting</UI.SmallLabel>
      </div>
      <div className="m-40">
        <UI.Image className="graphic-item m-0" alt="csgo" src={csgo} />
        <UI.SmallLabel>CS GO Betting</UI.SmallLabel>
      </div>
      <UI.GridContainer className="graphic-item m-40">
        <div>
          <UI.Image alt="boxing" className="m-0" src={boxing} />
          <UI.SmallLabel>Boxing Betting</UI.SmallLabel>
        </div>
        <div>
          <UI.Image alt="ufc" className="m-0" src={ufc} />
          <UI.SmallLabel>UFC Betting</UI.SmallLabel>
        </div>
      </UI.GridContainer>
      <div>
        <UI.Image className="graphic-item m-0" alt="golf" src={golf} />
        <UI.SmallLabel>Golf Betting</UI.SmallLabel>
      </div>
      <div className="m-40">
        <UI.Image
          className="graphic-item m-0"
          alt="instantWithdraw"
          src={instantWithdraw}
        />
        <UI.SmallLabel>Instant Withdrawing</UI.SmallLabel>
      </div>
      <div className="m-40">
        <UI.Image className="graphic-item m-0" alt="crypto" src={crypto} />
        <UI.SmallLabel>Crypto Casinos</UI.SmallLabel>
      </div>
      <UI.GridContainerThree className="graphic-item m-40">
        <div>
          <UI.Image className="graphic-item m-0" alt="visa" src={visa} />
          <UI.SmallLabel>Visa Casinos</UI.SmallLabel>
        </div>
        <div>
          <UI.Image
            className="graphic-item m-0"
            alt="mastercard"
            src={mastercard}
          />
          <UI.SmallLabel>Mastercard Casinos</UI.SmallLabel>
        </div>
        <div>
          <UI.Image
            className="graphic-item m-0"
            alt="playsafe"
            src={playsafe}
          />
          <UI.SmallLabel>Playsafe Casinos</UI.SmallLabel>
        </div>
      </UI.GridContainerThree>
      <UI.Description style={{ maxWidth: "460px", margin: "80px 0" }}>
        <p>
          We have three characters, two males and one female. They are main
          heroes in every illustrative page. With their actions we describe
          every scene, page and topic.
        </p>
      </UI.Description>
      <UI.GridContainer className="m-40">
        <UI.Image className="m-0" alt="male" src={male} />
        <UI.Image className="m-0" alt="maleTwo" src={maleTwo} />
        <UI.Image className="m-0" alt="female" src={female} />
        <UI.Image className="m-0" alt="cryptoimg" src={cryptoimg} />
      </UI.GridContainer>
      <UI.ColumsWrapper className="m-40">
        <UI.VideoWrapper style={{ height: "460px", margin: "60px 0" }}>
          <video
            className="horizontal-center"
            src={introLogo}
            height="100%"
            style={{ minWidth: "600px", height: "460px" }}
            loop
            autoPlay
            muted
          />
        </UI.VideoWrapper>
        <UI.Description style={{ margin: 0, marginLeft: "80px" }}>
          <p>
            <span className="highligh">The logo</span> is designed to be playful
            and recognisable with its logo symbol. It is combination between
            sharp edges font and casino chip with play button for the logo
            symbol.
          </p>
        </UI.Description>
      </UI.ColumsWrapper>
    </PageTemplate>
  );
};

export default Casinoble;
