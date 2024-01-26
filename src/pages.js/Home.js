import { LoginForm } from "../components.js";
import { CarouselImages, WelcomeSection } from "../components.js";

const Home = ({ setIsLoggedIn, showForm, setShowForm }) => {
  return (
    <div className="bg-secondary">
      <div className="home-container bg-secondary">
        <div className="aside-content">
          <img
            src={process.env.PUBLIC_URL + "/recognition.jpeg"}
            alt="sideimage"
            style={{ height: "15rem" }}
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
            style={{ height: "15rem" }}
          />
        </div>
      </div>
      <WelcomeSection />
    </div>
  );
};

export { Home };
