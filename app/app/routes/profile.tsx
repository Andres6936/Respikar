import TopNavigator from "~/layout/TopNavigator";
import BottomNavigator from "~/layout/BottomNavigator";

export default function () {
  return (
    <>
      {/* The <symbol> element is used to define graphical template objects which
     can be instantiated by a <use> element.

    The use of symbol elements for graphics that are used multiple times in
    the same document adds structure and semantics. Documents that are rich
    in structure may be rendered graphically, as speech, or as Braille, and
    thus promote accessibility.

    Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol */}
      <svg
        className="d-none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
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

      <section className="container-fluid bg-light py-2">
        <TopNavigator />
      </section>

      <div className="min-vh-100 bg-light">
        <section className="container-fluid pt-3 text-center border-top">
          <section className="row row-cols-2 border-bottom pb-3 mb-2">
            <div className="col-3">
              <img
                width={64}
                className="img-fluid mx-4"
                src="/png/Profile.png"
                alt="Profile"
              />
            </div>
            <div className="col-9 text-center">
              <p className="text-muted m-0 pt-2">Welcome,</p>
              <h6 className="h6 font-weight-bold">Claire Underwood</h6>
            </div>
          </section>
          <div className="row">
            <p className="col-4 text-right">S. Marital</p>
            <p className="col-8 text-left">Married</p>
          </div>
          <div className="row">
            <p className="col-4 text-right">Sex</p>
            <p className="col-8 text-left">Feminine</p>
          </div>
          <div className="row">
            <p className="col-4 text-right">Age</p>
            <p className="col-8 text-left">34</p>
          </div>
          <div className="row">
            <p className="col-4 text-right">Address</p>
            <p className="col-8 text-left">White House</p>
          </div>
          <div className="row">
            <p className="col-4 text-right">Country</p>
            <p className="col-8 text-left">United States</p>
          </div>
          <div className="row">
            <p className="col-4 text-right">City</p>
            <p className="col-8 text-left">Washington</p>
          </div>
          <div className="row">
            <p className="col-4 text-right">Email</p>
            <p className="col-8 text-left">claire@underwood.gov</p>
          </div>
          <div className="row">
            <p className="col-4 text-right">Phone</p>
            <p className="col-8 text-left">+(888) 825 457 5687</p>
          </div>
        </section>
        <section
          className="row mx-0 bg-light pt-3 pb-5"
          style={{ borderRadius: "30px 0 0 0" }}
        >
          <p className="text-center text-muted">Copyright © 2020. J &amp; J</p>
        </section>

        <BottomNavigator/>
      </div>
    </>
  );
}
