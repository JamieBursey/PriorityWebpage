import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const CarouselImages = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginLeft: "auto", marginRight: "auto", width: "30%" }}
    >
      <div
        className="carousel-inner mt-3 "
        style={{ border: "5px solid #EADBD8", borderRadius: "5px" }}
      >
        <div className="carousel-item active">
          <img
            src={process.env.PUBLIC_URL + "/priorityheader.jpeg"}
            className="d-block mx-auto img-fluid"
            alt="First slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + "/KellyBirthday.jpeg"}
            className="d-block mx-auto img-fluid"
            alt="Second slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + "/Danyelle.jpeg"}
            className="d-block mx-auto img-fluid"
            alt="Third slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + "/EmilyHome.jpeg"}
            className="d-block mx-auto img-fluid"
            alt="Fourth slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + "/courtneyhome.jpeg"}
            className="d-block mx-auto img-fluid"
            alt="Fifth slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item mt-3">
          <img
            src={process.env.PUBLIC_URL + "/GuaSha.jpeg"}
            className="d-block mx-auto img-fluid"
            alt="Sixth slide"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        style={{
          filter:
            "invert(50%) sepia(100%) saturate(300%) hue-rotate(180deg) brightness(100%) contrast(100%)",
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        style={{
          filter:
            "invert(50%) sepia(100%) saturate(300%) hue-rotate(180deg) brightness(100%) contrast(100%)",
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const WelcomeSection = () => {
  return (
    <div className="welcome-section text-center p-5">
      <h2>Welcome to Priority Wellness</h2>
      <p className="">
        Embrace a journey of wellness and restoration with our professional
        massage therapists. At Priority Wellness, our commitment is to your
        health and well-being. Our skilled therapists utilize a variety of
        techniques to help you achieve balance, relieve stress, and support your
        body's natural healing processes in a serene and nurturing setting.
      </p>
    </div>
  );
};

const ContactComponent = () => {
  return (
    <div className="contact-component text-center my-5">
      <h3>Connect with Us</h3>
      <div className="social-media-links my-3">
        <a
          href="https://www.facebook.com/profile.php?id=100067175816879"
          className="btn btn-primary mx-1"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/prioritywellness"
          className="btn btn-danger mx-1"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="email-contact my-3">
        <a
          href="mailto:info@prioritywellness.ca"
          className="btn btn-outline-secondary"
        >
          Email Us
        </a>
      </div>
    </div>
  );
};

const GoogleMapsLocation = () => {
  const locationSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.092977316676!2d-53.28456512360815!3d47.58543357118791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b734b3818cab85f%3A0x5e545b9543b38375!2sPriority%20Wellness!5e0!3m2!1sen!2sca!4v1706376049820!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <div className="google-map-container text-center">
      <iframe
        title="clinic-location"
        src={locationSrc}
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
export { CarouselImages, WelcomeSection, ContactComponent, GoogleMapsLocation };
