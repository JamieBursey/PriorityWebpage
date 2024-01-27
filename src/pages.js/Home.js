import {
  ContactComponent,
  GoogleMapsLocation,
  LoginForm,
} from "../components.js";
import { CarouselImages, WelcomeSection } from "../components.js";

const Home = ({ setIsLoggedIn, showForm, setShowForm }) => {
  return (
    <div className="">
      <div className="home-container">
        <div className="aside-content">
          <img
            src={process.env.PUBLIC_URL + "/recognition.jpeg"}
            alt="sideimage"
            style={{
              height: "15rem",
              border: "5px solid #EADBD8",
              borderRadius: "5px",
            }}
          />
        </div>
        <LoginForm
          showForm={showForm}
          setShowForm={setShowForm}
          presetKey="1234"
          onLoginStatusChange={setIsLoggedIn}
        />
        <CarouselImages />
        <div className="aside-content">
          <img
            src={process.env.PUBLIC_URL + "/prices.jpeg"}
            alt="sideimage"
            style={{
              height: "15rem",
              border: "5px solid #EADBD8",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <WelcomeSection />
      <GoogleMapsLocation />
      <ContactComponent />
    </div>
  );
};

export { Home };
