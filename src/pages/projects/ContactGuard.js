// GRAPHIC ELEMENTS - - - - - - -
import intro from "../../assets/projects/contact-guard/intro.png";
import registerProcess from "../../assets/projects/contact-guard/register-process.png";
import myContacts from "../../assets/projects/contact-guard/my-contacts.png";
import premiumPlans from "../../assets/projects/contact-guard/premium-plans.png";
import homeScreens from "../../assets/projects/contact-guard/home-screens.png";
import addcContact from "../../assets/projects/contact-guard/add-new-contact.png";
// COMPONENTS - - - - - - -
import * as UI from "./PageTemplateUI";
import PageTemplate from "./PageTemplate";

const ContactGuard = (props) => {
  return (
    <PageTemplate project={props.project}>
      <UI.Image
        className="graphic-item"
        alt="intro"
        src={intro}
        style={{ margin: 0 }}
      />

      <UI.PrototypeWrapper>
        <UI.Image
          style={{ maxWidth: "1760px", marginTop: "120px" }}
          alt="registerProcess"
          src={registerProcess}
        />
      </UI.PrototypeWrapper>
      <UI.ColumsWrapper>
        <UI.Image
          className="graphic-item"
          style={{ maxWidth: "540px", margin: "0", borderRadius: "10%" }}
          alt="myContacts "
          src={myContacts}
        />
        <UI.Description style={{ marginLeft: "80px" }}>
          <div className="desc-header">My Contacts</div>
          <p>
            Browse your contacts and seacrch based on the filters as Family,
            Friends, Business and Others.
          </p>
        </UI.Description>
      </UI.ColumsWrapper>
      <UI.ColumsWrapper style={{ marginTop: "140px" }} className="graphic-item">
        <UI.Description style={{ textAlign: "right" }}>
          <div className="desc-header">Premium plans</div>
          <p>
            Choose between different premium plans like free, monthly or yearly
            subscriptions and get access to extra functions and features.
          </p>
        </UI.Description>
        <UI.Image
          className="graphic-item"
          style={{ maxWidth: "540px", margin: "0", borderRadius: "5%" }}
          alt="premiumPlans "
          src={premiumPlans}
        />
      </UI.ColumsWrapper>
      <UI.Image className="graphic-item" alt="homeScreens" src={homeScreens} />
      <UI.Image alt="addcContact" src={addcContact} style={{ marginTop: 0 }} />
    </PageTemplate>
  );
};

export default ContactGuard;
