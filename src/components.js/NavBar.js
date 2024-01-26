import { Link, useNavigate } from "react-router-dom";
import { LOCALSTORAGE, NAVIGATION } from "../config.js";

const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedin = localStorage.getItem(LOCALSTORAGE.ISLOGGEDIN);
  return (
    <nav className="navbar navbar-expand-lg NavBarStyle">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={NAVIGATION.Home}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                The Team
              </a>
              <ul className="dropdown-menu bg-info">
                <li>
                  <Link className="dropdown-item" to={NAVIGATION.KELLY}>
                    Kelly Mercer
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <Link className="dropdown-item" to={NAVIGATION.DANYELLE}>
                  Danyelle Dubeau
                </Link>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="">
                  <Link className="dropdown-item" to={"/"}>
                    Emily Vokey
                  </Link>
                </li>
              </ul>
            </li>
            {isLoggedin !== "guest" ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={NAVIGATION.GIFTCARDS}
                >
                  Gift Card
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
