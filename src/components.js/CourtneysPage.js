const CourtneysProfile = () => {
  return (
    <div className="bg-secondary" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          <div lg={4} className="col mb-4 mb-lg-0 mt-2">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/courtneyhome.jpeg"}
                style={{ height: "300px" }}
                alt="emilysAbout"
              />
              <div className="card-body text-center">
                <h5 class="card-title">Courtney Spracklin</h5>
                <h5 class="card-title">Registered Massage Therapist</h5>
              </div>
            </div>
          </div>
          <div className="col mt-4" lg={8}>
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">About</h5>
                <p>
                  Courtney graduated from the Massage Therapy program in 2012
                  and has been growing her skills in the field ever since. Not
                  only is she an amazing massage therapist, she will be offering
                  so many more services such as reflexology, personal yoga
                  sessions and even facials!!
                </p>
                <h5 class="card-title">Bio</h5>
                <p>Something About Courtney goes here</p>
              </div>
            </div>
            <div className="card mt-4">
              <h5 class="card-title text-center">specialties</h5>
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
export { CourtneysProfile };
