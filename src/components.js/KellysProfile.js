const KellysProfile = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-4">
          <img
            src={process.env.PUBLIC_URL + "/KellyBirthday.jpeg"}
            alt="Kelly Mercer"
            style={{
              width: "20rem",
              height: "20rem",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <h2 className="mt-3">Kelly Mercer</h2>
          <p className="lead">Registered Massage Therapist (RMT)</p>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3>About Kelly</h3>
              <p>Kelly's bio here...</p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h3>My Philosophy</h3>
              <p>Kelly's philosophy here...</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Specialties</h3>
              <ul className="list-unstyled">
                {/* List of Specialties */}
                <li>Deep Tissue Massage</li>
                <li>Sports Massage</li>
                <li>Swedish Massage</li>
                {/* More specialties */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KellysProfile2 = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-4">
            <img
              src={process.env.PUBLIC_URL + "/KellyBirthday.jpeg"}
              alt="Kelly Mercer"
              style={{
                width: "15rem",
                height: "15rem",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
          <h2 className="text-center mb-3">Kelly Mercer</h2>
          <p className="text-center lead mb-5">
            Registered Massage Therapist (RMT)
          </p>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">About Kelly</h3>
                  <p className="card-text">
                    Kelly's bio here - a description of her experience and
                    approach to massage therapy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">My Philosophy</h3>
                  <p className="card-text">
                    Kelly's philosophy here - her beliefs about wellness and her
                    approach to client care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h3 className="card-title">Specialties</h3>
              <ul className="list-group list-group-flush">
                {/* List out specialties here */}
                <li className="list-group-item">Deep Tissue Massage</li>
                <li className="list-group-item">Sports Massage</li>
                <li className="list-group-item">Swedish Massage</li>
                {/* Add more specialties as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KellysProfile3 = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center mb-5">
        <div className="col-12 text-center">
          <img
            src={process.env.PUBLIC_URL + "/KellyBirthday.jpeg"}
            alt="Kelly Mercer"
            className="rounded-circle"
            style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
          />
          <h2 className="mt-3">Kelly Mercer</h2>
          <p className="lead">Registered Massage Therapist (RMT)</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <div className="card mb-4">
            <div className="card-body">
              <h3>About Kelly</h3>
              <p>Kelly's detailed bio goes here...</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Specialties</h3>
              <ul className="list-unstyled">
                {/* List out specialties here */}
                <li>Deep Tissue Massage</li>
                <li>Sports Massage</li>
                <li>Swedish Massage</li>
                {/* More specialties */}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card bg-light">
            <div className="card-body">
              <h3>My Philosophy</h3>
              <p>Kelly's philosophy or approach to therapy...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { KellysProfile, KellysProfile2, KellysProfile3 };
