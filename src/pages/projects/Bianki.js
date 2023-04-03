// GRAPHIC ELEMENTS - - - - - - -
import homepage from "../../assets/projects/bianki/homepage.png";
import productspage from "../../assets/projects/bianki/product-page.png";
import products from "../../assets/projects/bianki/products.png";
import filters from "../../assets/projects/bianki/filters.png";
import buying from "../../assets/projects/bianki/buying.png";
import productVideo from "../../assets/projects/bianki/product-video.mp4";
import mobilePrototype from "../../assets/projects/bianki/mobile-prototype.mp4";
import otherLooks from "../../assets/projects/bianki/other-looks.png";
import orderTracking from "../../assets/projects/bianki/order-tracking.png";
import mobile from "../../assets/projects/bianki/mobile.png";
// COMPONENTS - - - - - - -
import * as UI from "./PageTemplateUI";
import PageTemplate from "./PageTemplate";

const Bianki = (props) => {
  return (
    <PageTemplate project={props.project}>
      <UI.Image alt="homepage" src={homepage} style={{ margin: 0 }} />
      <div>
        <UI.Image
          alt="productspage"
          src={productspage}
          style={{ marginTop: "60px", marginBottom: "0" }}
        />
        <UI.Image
          className="graphic-item"
          alt="products"
          src={products}
          style={{ marginTop: "-60px", marginBottom: "0" }}
        />
      </div>
      <UI.Image className="graphic-item" alt="filters" src={filters} />
      <div style={{ textAlign: "left" }}>
        <UI.Label>Detailed page</UI.Label>
        <video
          className="horizontal-center"
          src={productVideo}
          width="100%"
          loop
          autoPlay
          muted
        />
      </div>
      <UI.Image className="graphic-item" alt="buying" src={buying} />
      <UI.Image
        className="graphic-item"
        alt="otherLooks"
        src={otherLooks}
        style={{ margin: 0 }}
      />
      <UI.Image
        // className="graphic-item"
        alt="orderTracking"
        src={orderTracking}
      />
      <UI.PrototypeWrapper>
        <UI.Image
          // className="graphic-item"
          alt="mobile"
          src={mobile}
        />
        <video
          className="graphic-item"
          src={mobilePrototype}
          loop
          autoPlay
          muted
        />
      </UI.PrototypeWrapper>
    </PageTemplate>
  );
};

export default Bianki;
