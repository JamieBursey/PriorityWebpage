const EmilysProfile = () => {
  return (
    <div className="bg-secondary" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          <div lg={4} className="col mb-4 mb-lg-0 mt-2">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/EmilyHome.jpeg"}
                style={{ height: "300px" }}
                alt="emilysAbout"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Emily Vokey</h5>
                <h5 className="card-title">Registered Massage Therapist</h5>
              </div>
            </div>
          </div>
          <div className="col mt-4" lg={8}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About</h5>
                <p>
                  Emily graduated from the massage therapy program in 2019 and
                  has been registered and working ever since. Emily has since
                  continued her education and completed courses in both Cupping
                  and Gua Sha therapies. She is an awesome massage therapist and
                  very eager to hit the ground running here.{" "}
                </p>
                <h5 className="card-title">Bio</h5>
                <p>Something About Emily goes here</p>
              </div>
            </div>
            <div className="card mt-4">
              <h5 className="card-title text-center">specialties</h5>
              <ul>
                <li>Deep Tissue</li>
                <li>Cupping</li>
                <li>Relaxation</li>
                <li>Gua Sha</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EmilysProfile };
