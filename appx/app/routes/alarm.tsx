export default function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Respikar
          </a>
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
          <div
            className="collapse navbar-collapse"
            id="navbar-supported-content"
          >
            <ul
              className="navbar-nav mr-auto mb-2 mb-lg-0 px-4"
              style={{ fontSize: "0.7em" }}
            >
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="../index.html">
                  <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                    <use xlinkHref="#bi-house-door" />
                  </svg>
                  <p className="ml-3 d-inline">Home</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-uppercase text-primary"
                  aria-current="page"
                  href="#"
                >
                  <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                    <use xlinkHref="#bi-bell" />
                  </svg>
                  <p className="ml-3 d-inline">Alarms</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="Profile.html">
                  <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                    <use xlinkHref="#bi-gear" />
                  </svg>
                  <p className="ml-3 d-inline">Profile</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="HowTo.html">
                  <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                    <use xlinkHref="#bi-book" />
                  </svg>
                  <p className="ml-3 d-inline">Manual</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="analog-clock my-4">
        <div className="clock">
          <div className="wrap">
            <span className="hour" />
            <span className="minute" />
            <span className="second" />
            <span className="dot" />
          </div>
        </div>
      </section>
      {/* The <symbol> element is used to define graphical template objects which
     can be instantiated by a <use> element.

    The use of symbol elements for graphics that are used multiple times in
    the same document adds structure and semantics. Documents that are rich
    in structure may be rendered graphically, as speech, or as Braille, and
    thus promote accessibility.

    Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <symbol id="bi-alarm" viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
          />
        </symbol>
        <symbol id="bi-x" viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
        <symbol id="bi-book" viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
          />
        </symbol>
        <symbol id="bi-bell" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
          <path
            fillRule="evenodd"
            d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
          />
        </symbol>
        <symbol id="bi-gear" viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
          />
          <path
            fillRule="evenodd"
            d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
          />
        </symbol>
        <symbol id="bi-house-door" viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
          />
          <path
            fillRule="evenodd"
            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
        </symbol>
      </svg>
      <section
        id="rp-container-alarms"
        className="container my-3 px-4 py-3 bg-light text-center font-weight-bold"
      >
        <div className="row row-cols-3 mb-3 bg-white border align-items-center pb-3 pt-4">
          <div className="col-6">
            <div className="row row-cols-2">
              <svg
                viewBox="0 0 16 16"
                width="2em"
                height="2em"
                className="col-4 offset-1"
              >
                <use xlinkHref="#bi-alarm" />
              </svg>
              <p className="col-7 h1 mb-0">08:00</p>
            </div>
          </div>
          <div className="col-4 ml-2">
            <div className="row flex-nowrap">
              <div className="col px-0">
                <p className="my-0">S</p>
              </div>
              <div className="col px-0">
                <p className="my-0">M</p>
              </div>
              <div className="col px-0">
                <p className="my-0">T</p>
              </div>
              <div className="col px-0">
                <p className="my-0">W</p>
              </div>
              <div className="col px-0">
                <p className="my-0">T</p>
              </div>
              <div className="col px-0">
                <p className="my-0">F</p>
              </div>
              <div className="col px-0">
                <p className="my-0">S</p>
              </div>
            </div>
          </div>
          <div className="col-1">
            <svg
              viewBox="0 0 16 16"
              width="1.3em"
              height="1.3em"
              className="float-right"
              style={{ transform: "translate(100%, -100%)" }}
            >
              <use xlinkHref="#bi-x" />
            </svg>
          </div>
        </div>
        <div className="row row-cols-3 mb-3 bg-white border align-items-center pb-3 pt-4">
          <div className="col-6">
            <div className="row row-cols-2">
              <svg
                viewBox="0 0 16 16"
                width="2em"
                height="2em"
                className="col-4 offset-1"
              >
                <use xlinkHref="#bi-alarm" />
              </svg>
              <p className="col-7 h1 mb-0 text-muted">17:35</p>
            </div>
          </div>
          <div className="col-4 ml-2">
            <div className="row flex-nowrap text-muted">
              <div className="col px-0">
                <p className="my-0">S</p>
              </div>
              <div className="col px-0">
                <p className="my-0">M</p>
              </div>
              <div className="col px-0">
                <p className="my-0">T</p>
              </div>
              <div className="col px-0">
                <p className="my-0">W</p>
              </div>
              <div className="col px-0">
                <p className="my-0">T</p>
              </div>
              <div className="col px-0">
                <p className="my-0">F</p>
              </div>
              <div className="col px-0">
                <p className="my-0">S</p>
              </div>
            </div>
          </div>
          <div className="col-1">
            <svg
              viewBox="0 0 16 16"
              width="1.3em"
              height="1.3em"
              className="float-right"
              style={{ transform: "translate(100%, -100%)" }}
            >
              <use xlinkHref="#bi-x" />
            </svg>
          </div>
        </div>
        <div className="row row-cols-3 mb-3 bg-white border align-items-center pb-3 pt-4">
          <div className="col-6">
            <div className="row row-cols-2">
              <svg
                viewBox="0 0 16 16"
                width="2em"
                height="2em"
                className="col-4 offset-1"
              >
                <use xlinkHref="#bi-alarm" />
              </svg>
              <p className="col-7 h1 mb-0">13:48</p>
            </div>
          </div>
          <div className="col-4 ml-2">
            <p className="mb-0 text-nowrap">Mon, Thu.</p>
          </div>
          <div className="col-1">
            <svg
              viewBox="0 0 16 16"
              width="1.3em"
              height="1.3em"
              className="float-right"
              style={{ transform: "translate(100%, -100%)" }}
            >
              <use xlinkHref="#bi-x" />
            </svg>
          </div>
        </div>
        <div className="row row-cols-3 mb-3 bg-white border align-items-center pb-3 pt-4">
          <div className="col-6">
            <div className="row row-cols-2">
              <svg
                viewBox="0 0 16 16"
                width="2em"
                height="2em"
                className="col-4 offset-1"
              >
                <use xlinkHref="#bi-alarm" />
              </svg>
              <p className="col-7 h1 mb-0">15:10</p>
            </div>
          </div>
          <div className="col-4 ml-2">
            <p className="mb-0 text-nowrap">Mon, Tue.</p>
          </div>
          <div className="col-1">
            <svg
              viewBox="0 0 16 16"
              width="1.3em"
              height="1.3em"
              className="float-right"
              style={{ transform: "translate(100%, -100%)" }}
            >
              <use xlinkHref="#bi-x" />
            </svg>
          </div>
        </div>
        <div className="row row-cols-3 mb-3 bg-white border align-items-center pb-3 pt-4">
          <div className="col-6">
            <div className="row row-cols-2">
              <svg
                viewBox="0 0 16 16"
                width="2em"
                height="2em"
                className="col-4 offset-1"
              >
                <use xlinkHref="#bi-alarm" />
              </svg>
              <p className="col-7 h1 mb-0">23:45</p>
            </div>
          </div>
          <div className="col-4 ml-2">
            <div className="row flex-nowrap">
              <div className="col px-0">
                <p className="my-0">S</p>
              </div>
              <div className="col px-0">
                <p className="my-0">M</p>
              </div>
              <div className="col px-0">
                <p className="my-0">T</p>
              </div>
              <div className="col px-0">
                <p className="my-0">W</p>
              </div>
              <div className="col px-0">
                <p className="my-0">T</p>
              </div>
              <div className="col px-0">
                <p className="my-0">F</p>
              </div>
              <div className="col px-0">
                <p className="my-0">S</p>
              </div>
            </div>
          </div>
          <div className="col-1">
            <svg
              viewBox="0 0 16 16"
              width="1.3em"
              height="1.3em"
              className="float-right"
              style={{ transform: "translate(100%, -100%)" }}
            >
              <use xlinkHref="#bi-x" />
            </svg>
          </div>
        </div>
      </section>
      <section className="container text-center">
        <button type="button" className="btn btn-primary">
          Add Alarm
        </button>
      </section>
      <section
        className="row mx-0 bg-light pt-3 pb-5"
        style={{ borderRadius: "30px 0 0 0" }}
      >
        <p className="text-center text-muted small">
          Copyright © 2020. J &amp; J
        </p>
      </section>
      {/* With the classes: <.d-block .d-sm-none> the footer will be visible only on xs.
     Reference: Documentation Bootstrap 5 - Section: Utilities - Display*/}
      <footer className="bg-light mt-auto py-2 border-top fixed-bottom d-block d-sm-none">
        <div className="container mx-0 row row-cols-4 gx-5">
          <a className="col text-muted" href="../index.html">
            <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
              <use xlinkHref="#bi-house-door" />
            </svg>
          </a>
          <a className="col" href="#">
            <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
              <use xlinkHref="#bi-bell" />
            </svg>
          </a>
          <a className="col text-muted" href="HowTo.html">
            <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
              <use xlinkHref="#bi-book" />
            </svg>
          </a>
          <a className="col text-muted" href="Profile.html">
            <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
              <use xlinkHref="#bi-gear" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
