const CarouselImages = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginLeft: "auto", marginRight: "auto", width: "30%" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active mt-3">
          <img
            src="/priorityheader.jpeg"
            className="d-block mx-auto img-fluid"
            alt="First slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item mt-3">
          <img
            src="/KellyBirthday.jpeg"
            className="d-block mx-auto img-fluid"
            alt="First slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item mt-3">
          <img
            src="/Danyelle.jpeg"
            className="d-block mx-auto img-fluid"
            alt="First slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item mt-3">
          <img
            src="/EmilyHome.jpeg"
            className="d-block mx-auto img-fluid"
            alt="First slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item mt-3">
          <img
            src="/courtneyhome.jpeg"
            className="d-block mx-auto img-fluid"
            alt="First slide"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item mt-3">
          <img
            src="/GuaSha.jpeg"
            className="d-block mx-auto img-fluid"
            alt="First slide"
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

export { CarouselImages, WelcomeSection };
