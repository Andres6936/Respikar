import { Link } from "@remix-run/react";

export default function () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Respikar
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-supported-content"
          aria-controls="navbar-supported-content"
          aria-expanded="false"
          aria-label="Toggle Navigation"
          style={{ color: "transparent" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-supported-content">
          <ul
            className="navbar-nav mr-auto mb-2 mb-lg-0 px-4"
            style={{ fontSize: "0.7em" }}
          >
            <li className="nav-item">
              <Link
                className="nav-link active text-uppercase text-primary"
                aria-current="page"
                to="/"
              >
                <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                  <use xlinkHref="#bi-house-door" />
                </svg>
                <p className="ml-3 d-inline">Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/alarm">
                <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                  <use xlinkHref="#bi-bell" />
                </svg>
                <p className="ml-3 d-inline">Alarms</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/profile">
                <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                  <use xlinkHref="#bi-gear" />
                </svg>
                <p className="ml-3 d-inline">Profile</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/howto">
                <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                  <use xlinkHref="#bi-book" />
                </svg>
                <p className="ml-3 d-inline">Manual</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
