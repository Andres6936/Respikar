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

      <TopNavigator />

      <section
        className="container py-3"
        style={{ backgroundImage: 'url("/png/BackgroundAbstract.png")' }}
      >
        <div
          className="mx-2 mt-3 p-4 text-white col-lg-4"
          style={{ backgroundColor: "#162e51" }}
        >
          <h1
            className="h1 mt-1"
            style={{ fontWeight: 700, fontSize: "2em", lineHeight: "1.2" }}
          >
            Patient Callout:
            <br />
            <span className="text-info">
              How to use the inhaler correctly for avoid mistakes
            </span>
          </h1>
          <p className="my-4" style={{ lineHeight: "1.5" }}>
            Estimates of inhaler errors include up to 90% of patients using
            pressurised metered dose inhalers (pMDIs).
          </p>
          <div className="text-center">
            <button
              className="btn btn-block text-white"
              style={{ backgroundColor: "#005ea2", fontWeight: 700 }}
            >
              See Manual
            </button>
          </div>
        </div>
      </section>
      <section className="container py-3 col-lg-8 mx-lg-auto">
        <div className="row mt-3">
          <div className="col-lg-6">
            <h2 className="h2 font-weight-bold">
              How to use an inhaler - no spacer
            </h2>
            <p className="mt-3">
              Using a metered-dose inhaler (MDI) seems simple. But many people
              do not use them the right way. If you use your MDI the wrong way,
              less medicine gets to your lungs, and most remains in the back of
              your mouth. If you have a spacer, use it. It helps get more
              medicine into your airways.
            </p>
            {/* Important added the <br> tag to start, this cause that to use display: inline; the after
       block wrap the flow of text and avoid the overflow of elements */}
            <p className="pb-1 underline--red">
              <br />
              (The instructions below are not for dry powder inhalers. They have
              different instructions.)
            </p>
          </div>
          <figure className="figure pt-4 pt-lg-0 pb-1 offset-lg-1 col-lg-4">
            <img
              className="figure-img img-fluid border"
              src="/png/MDI.jpg"
              alt="Metered-Dose Inhaler"
            />
            <figcaption className="figure-caption">
              Source: Illustration by Javier Trigo
              <br />
              <br />
              In the image, (left to right) a MDI, Turbohaler, Autohaler and
              Accuhaler
            </figcaption>
          </figure>
        </div>
        <h3 className="h3 font-weight-bold mt-3">Getting Ready</h3>
        <ul className="list-group list-group-flush my-3">
          <li className="list-group-item">
            Cap should be removed and inhaler shaken to ensure consistent
            delivery of dose. Device should be primed if patient is using for
            the first time, or if not used for a while.
            <figure className="figure">
              <img
                className="figure-img img-thumbnail my-2"
                src="/png/MDI-Shaken.png"
                alt="Removed and inhaler shaken"
              />
              <figcaption className="figure-caption">
                Source: Illustration by Javier Trigo
              </figcaption>
            </figure>
          </li>
          <li className="list-group-item">
            Patient should breathe out fully.
            <figure className="figure">
              <img
                className="figure-img img-thumbnail my-2"
                src="/png/MDI-BreatheOut.png"
                alt="Breathe Out"
              />
              <figcaption className="figure-caption">
                Source: Illustration by Javier Trigo
              </figcaption>
            </figure>
          </li>
          <li className="list-group-item">
            Patient should breathe in slowly and steadily and press down on the
            inhaler device.
            <figure className="figure">
              <img
                className="figure-img img-thumbnail my-2"
                src="/png/MDI-BreatheSlowly.png"
                alt="Breathe Slowly"
              />
              <figcaption className="figure-caption">
                Source: Illustration by Javier Trigo
              </figcaption>
            </figure>
          </li>
          <li className="list-group-item">
            On inhalation, the patient should hold their breath for a count of
            ten.
            <figure className="figure">
              <img
                className="figure-img img-thumbnail my-2"
                src="/png/MDI-HoldBreath.png"
                alt="Hold Breath"
              />
              <figcaption className="figure-caption">
                Source: Illustration by Javier Trigo
              </figcaption>
            </figure>
          </li>
          <li className="list-group-item">
            Patient should slowly breathe out, repeat dose (if applicable), and
            replace mouthpiece cover. Clean device if necessary after use.
            <figure className="figure">
              <img
                className="figure-img img-thumbnail my-2"
                src="/png/MDI-SlowlyBreatheOut.png"
                alt="Slowly Breathe Out"
              />
              <figcaption className="figure-caption">
                Source: Illustration by Javier Trigo
              </figcaption>
            </figure>
          </li>
        </ul>
        <h3 className="h3 font-weight-bold">Breathe in Slowly</h3>
        <ul className="row list-inline list-group-flush my-3">
          <li className="list-inline-item col-lg-4 border-right mb-3 mx-0">
            Hold the inhaler with the mouthpiece down. Place your lips around
            the mouthpiece so that you form a tight seal.
          </li>
          <li className="list-inline-item col-lg-4 border-right mb-3 mx-0">
            As you start to slowly breathe in through your mouth, press down on
            the inhaler one time.
          </li>
          <li className="list-inline-item col-lg-4 border-right mx-0">
            Keep breathing in slowly, as deeply as you can.
          </li>
        </ul>
      </section>
      <section
        className="container text-white py-3"
        style={{ backgroundColor: "#162e51" }}
      >
        <h3 className="h3 font-weight-bold text-info">Hold Your Breath</h3>
        <ul className="list-group list-group-flush my-3">
          <li
            className="list-group-item"
            style={{ backgroundColor: "inherit" }}
          >
            Take the inhaler out of your mouth. If you can, hold your breath as
            you slowly count to 10. This lets the medicine reach deep into your
            lungs.
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "inherit" }}
          >
            Pucker your lips and breathe out slowly through your mouth.
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "inherit" }}
          >
            If you are using inhaled, quick-relief medicine (beta-agonists),
            wait about 1 minute before you take your next puff. You do not need
            to wait a minute between puffs for other medicines.
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "inherit" }}
          >
            Put the cap back on the mouthpiece and make sure it is firmly
            closed.
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "inherit" }}
          >
            After using your inhaler, rinse your mouth with water, gargle, and
            spit. Do not swallow the water. This helps reduce side effects from
            your medicine.
          </li>
        </ul>
      </section>
      <section className="container py-3">
        <h3 className="h3 font-weight-bold">Keep Your Inhaler Clean</h3>
        <p className="mt-3">
          Look at the hole where the medicine sprays out of your inhaler. If you
          see powder in or around the hole, clean your inhaler.
        </p>
        <ul className="list-group list-group-flush my-3">
          <li className="list-group-item">
            Remove the metal canister from the L-shaped plastic mouthpiece.
          </li>
          <li className="list-group-item">
            Rinse only the mouthpiece and cap in warm water.
          </li>
          <li className="list-group-item">Let them air-dry overnight.</li>
          <li className="list-group-item">
            In the morning, put the canister back inside. Put the cap on.
          </li>
          <li className="list-group-item">DO NOT rinse any other parts.</li>
        </ul>
        <h3 className="h3 font-weight-bold">Replacing Your Inhaler</h3>
        <p className="mt-3">
          Most inhalers come with counters on the canister. Keep an eye on the
          counter and replace the inhaler before you run out of medicine.
        </p>
        <p>
          DO NOT put your canister in water to see if it is empty. This does not
          work.
        </p>
        <p>
          Bring your inhaler to your clinic appointments. Your provider can make
          sure you are using it the right way.
        </p>
        <h3 className="h3 font-weight-bold">Storing Your Inhaler</h3>
        <p className="mt-3">
          Store your inhaler at room temperature. It may not work well if it is
          too cold. The medicine in the canister is under pressure. So make sure
          you do not get it too hot or puncture it.
        </p>
      </section>
      <section className="container bg-light text-body py-3">
        <h3 className="h3 font-weight-bold">Alternative Names</h3>
        <p className="mt-3">
          Metered-dose inhaler (MDI) administration - no spacer; Bronchial
          nebulizer; Wheezing - nebulizer; Reactive airway - nebulizer; COPD -
          nebulizer; Chronic bronchitis - nebulizer; Emphysema - nebulizer
        </p>
        <h3 className="h3 font-weight-bold">References</h3>
        <p className="mt-3">
          Laube BL, Dolovich MB. Aerosols and aerosol drug delivery systems. In:
          Burks AW, Holgate ST, O'Hehir RE, et al, eds. Middleton's Allergy
          Principles and Practice. 9th ed. Philadelphia, PA: Elsevier; 2020:chap
          63.
        </p>
        <p>
          Waller DG, Sampson AP. Asthma and chronic obstructive pulmonary
          disease. In: Waller DG, Sampson AP, eds. Medical Pharmacology and
          Therapeutics. 5th ed. Philadelphia, PA: Elsevier; 2018:chap 12.
        </p>
      </section>
      <section
        className="container py-3 text-body"
        style={{ backgroundColor: "#dfe1e2" }}
      >
        <h3 className="h3 font-weight-bold">Review Date 1/13/2020</h3>
        <p className="mt-3">
          Updated by: Laura J. Martin, MD, MPH, ABIM Board Certified in Internal
          Medicine and Hospice and Palliative Medicine, Atlanta, GA. Also
          reviewed by David Zieve, MD, MHA, Medical Director, Brenda Conaway,
          Editorial Director, and the A.D.A.M. Editorial team.
        </p>
      </section>
      <section className="container bg-dark text-light py-3">
        <small className="small">
          The information provided herein should not be used during any medical
          emergency or for the diagnosis or treatment of any medical condition.
          A licensed physician should be consulted for diagnosis and treatment
          of any and all medical conditions. Call 911 for all medical
          emergencies. Links to other sites are provided for information only --
          they do not constitute endorsements of those other sites. Copyright
          1997-2020, A.D.A.M., Inc. Duplication for commercial use must be
          authorized in writing by ADAM Health Solutions.
        </small>
      </section>
      <section
        className="row mx-0 bg-light pt-3 pb-5"
        style={{ borderRadius: "30px 0 0 0" }}
      >
        <p className="text-center text-muted">Copyright © 2020. J &amp; J</p>
      </section>

      <BottomNavigator />
    </>
  );
}
