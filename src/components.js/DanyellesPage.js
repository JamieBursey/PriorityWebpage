const DanyellesProfile = () => {
  return (
    <div className="bg-secondary" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          <div lg={4} className="col mb-4 mb-lg-0 mt-2">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Danyelle.jpeg"}
                style={{ height: "300px" }}
                alt="emilysAbout"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Danyelle Dubeau</h5>
                <h5 className="card-title">Registered Massage Therapist</h5>
              </div>
            </div>
          </div>
          <div className="col mt-4" lg={8}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About</h5>
                <p>
                  Danyelle is a very talented registered massage therapist
                  working since 2018. She is a therapeutic therapist that can
                  achieve deep pressure and the release of fascial restrictions
                  and trigger points. She also is certified in cupping therapy
                  and goes above and beyond in her assessments.
                </p>
                <h5 className="card-title">Bio</h5>
                <p>Something About Danyelle goes here</p>
              </div>
            </div>
            <div className="card mt-4">
              <h5 className="card-title text-center">specialties</h5>
              <ul>
                <li>Deep Tissue</li>
                <li>Cupping</li>
                <li>Relaxation</li>
                <li>Gua Sha</li>
                <li>Facial Release</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DanyellesProfile };
