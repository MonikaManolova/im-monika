// GRAPHIC ELEMENTS - - - - - - -
import character from "../../assets/projects/iam-sloty/character.png";
import logo from "../../assets/projects/iam-sloty/logo.svg";
import homepage from "../../assets/projects/iam-sloty/home-page.png";
import games from "../../assets/projects/iam-sloty/games.png";
import gamespage from "../../assets/projects/iam-sloty/games-page.png";
import forms from "../../assets/projects/iam-sloty/forms.png";
import transactions from "../../assets/projects/iam-sloty/transactions-page.png";
import depositForm from "../../assets/projects/iam-sloty/deposit-form.png";
import gamePlay from "../../assets/projects/iam-sloty/game-play.png";
import promotions from "../../assets/projects/iam-sloty/promotions.png";
import promoEls from "../../assets/projects/iam-sloty/promo-elements.png";
import jackpotVideo from "../../assets/projects/iam-sloty/jackpot.mp4";
// COMPONENTS - - - - - - -
import * as UI from "./PageTemplateUI";
import PageTemplate from "./PageTemplate";

const IamSloty = (props) => {
  return (
    <PageTemplate project={props.project}>
      <UI.ColumsWrapper className="graphic-item">
        <UI.Image
          style={{ maxWidth: "540px", margin: "0" }}
          alt="character"
          src={character}
        />
        <UI.Description style={{ marginLeft: "80px" }}>
          <p>
            <span className="highligh">The Character</span> aims to guide the
            user all the time, thought his experience at the casino. This
            character is Robot called Sloty, and that’s where comes the casino
            name “I am Sloty”.
          </p>
        </UI.Description>
      </UI.ColumsWrapper>
      <UI.ColumsWrapper className="graphic-item" style={{ margin: "180px 0" }}>
        <UI.Description>
          <p>
            <span className="highligh">The Logo</span> is clean and based on one
            color. With the sharp edges of the font end extra elements, the logo
            is made to represent robotic emblem.
          </p>
        </UI.Description>
        <UI.Image
          style={{ maxWidth: "610px", margin: "0" }}
          alt="logo"
          src={logo}
        />
      </UI.ColumsWrapper>

      <UI.Image alt="homepage" src={homepage} style={{ margin: 0 }} />
      <div style={{ marginTop: "-360px" }}>
        <UI.Image className="graphic-item" alt="games" src={games} />
      </div>
      <UI.Image alt="gamespage" src={gamespage} style={{ margin: 0 }} />
      <div style={{ marginTop: "-300px" }}>
        <UI.Image
          className="forms graphic-item"
          alt="forms"
          src={forms}
          style={{ margin: 0 }}
        />
      </div>
      <UI.TransactionsPage>
        <UI.Image alt="transactions" src={transactions} />
        <UI.Image
          className="depositForm graphic-item"
          alt="depositForm"
          src={depositForm}
        />
      </UI.TransactionsPage>
      <div style={{ marginTop: "-200px", position: "relative" }}>
        <UI.Image
          className="game-play graphic-item"
          alt="gamePlay"
          src={gamePlay}
          style={{ margin: 0 }}
        />
        ,
      </div>

      <UI.PromosPageWrapper>
        <UI.Image className="graphic-item" alt="promoEls" src={promoEls} />
        <UI.Image alt="promotions" src={promotions} />
      </UI.PromosPageWrapper>
      <UI.ColumsWrapper style={{marginTop: "-60px"}} className="graphic-item">
        <UI.VideoWrapper style={{ marginRight: "30px" }}>
          <video
            className="vertical-center jackpot-video"
            src={jackpotVideo}
            width="100%"
            loop
            autoPlay
            muted
          />
        </UI.VideoWrapper>
        <UI.Description className="jackpot-description" style={{ margin: 0 }}>
          <p>
            In order to grab user’s <span className="highligh">attention</span>,
            in “I am Sloty” are used different{" "}
            <span className="highligh">colorfull</span>,{" "}
            <span className="highligh">playful</span> and{" "}
            <span className="highligh">animated</span> elements.
          </p>
        </UI.Description>
      </UI.ColumsWrapper>
    </PageTemplate>
  );
};

export default IamSloty;
