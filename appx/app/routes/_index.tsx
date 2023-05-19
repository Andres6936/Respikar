import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

// Enum of uses that have the inhaler
const TypeUses = {
  MISSING: "MISSING",
  REJECTED: "REJECTED",
  COMPLETED: "COMPLETED",
  NEXT_MONTH: "NEXT_MONTH",
};

// The Object.freeze() method freezes an object. A frozen object can no
// longer be changed; freezing an object prevents new properties from being
// added to it, existing properties from being removed, prevents changing
// the enumerability, configurability, or writability of existing
// properties, and prevents the values of existing properties from being
// changed. In addition, freezing an object also prevents its prototype
// from being changed. freeze() returns the same object that was passed in.
Object.freeze(TypeUses);

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  useEffect(() => {
    // Execute the script after page load.
    // @type {Storage}
    let localStorage = window.localStorage;
    // @type {string|null}
    const isFirstView = localStorage.getItem("IS_FIRST_SESSION");
    // If not has been defined (null), then is first visit of user
    if (isFirstView === null) {
      localStorage.setItem("IS_FIRST_SESSION", "false");
      // Redirect to page of login
      // window.location.href = "./html/SignIn.html";
      // Create dummy date for show in the section of stats
      localStorage.setItem(TypeUses.MISSING, 7);
      localStorage.setItem(TypeUses.REJECTED, 4);
      localStorage.setItem(TypeUses.COMPLETED, 12);
      localStorage.setItem(TypeUses.NEXT_MONTH, 3);
    }

    // Struct for save the types of uses that the user has been made with the inhaler
    const inhalerUses: Record<string, any> = {};

    // Load the data of inhaler uses
    {
      let localStorage = window.localStorage;

      inhalerUses[TypeUses.MISSING] = localStorage.getItem(TypeUses.MISSING);
      inhalerUses[TypeUses.REJECTED] = localStorage.getItem(TypeUses.REJECTED);
      inhalerUses[TypeUses.COMPLETED] = localStorage.getItem(
        TypeUses.COMPLETED
      );
      inhalerUses[TypeUses.NEXT_MONTH] = localStorage.getItem(
        TypeUses.NEXT_MONTH
      );

      // Update the elements in the DOM for reflect the information of user
      document.getElementById("label-inhaler-missing").innerText =
        inhalerUses[TypeUses.MISSING];
      document.getElementById("label-inhaler-rejected").innerText =
        inhalerUses[TypeUses.REJECTED];
      document.getElementById("label-inhaler-completed").innerText =
        inhalerUses[TypeUses.COMPLETED];
      document.getElementById("label-inhaler-next-month").innerText =
        inhalerUses[TypeUses.NEXT_MONTH];
    }

    // Example: Enable tooltips everywhere
    // One way to initialize all tooltips on a page would be to select them
    // by their data-toggle attribute:
    // Reference: Boostrap 5 Doc - Section Tooltip
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    let context = document.getElementById("respikar-day-chart");
    let myChart = new Chart(context, {
      type: "doughnut",
      data: {
        labels: ["Missing", "Rejected", "Completed", "Next Month"],
        datasets: [
          {
            label: "# of Votes",
            data: [
              inhalerUses[TypeUses.REJECTED],
              inhalerUses[TypeUses.MISSING],
              inhalerUses[TypeUses.COMPLETED],
              inhalerUses[TypeUses.NEXT_MONTH],
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            backgroundColor: ["#dc3545", "#ffc107", "#198754", "#0d6efd"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        // 50 - for doughnut, 0 - for pie
        cutoutPercentage: 50,
        legend: {
          labels: {
            fontColor: "white",
            fontFamily: "'Public Sans', 'sans-serif'",
            fontSize: 16,
            fontStyle: "normal",
          },
        },
        tooltips: {
          bodyFontFamily: "'Public Sans', 'sans-serif'",
          bodySpacing: 4,
          bodyFontSize: 16,
          bodyFontColor: "black",
          backgroundColor: "white",
        },
      },
    });
  }, []);

  return (
    <>
      <svg
        className="d-none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <symbol id="bi-exclamation" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </symbol>
        <symbol id="bi-x" fill="currentColor" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
        <symbol id="bi-check2" fill="currentColor" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </symbol>
        <symbol id="bi-clock-history" fill="currentColor" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
          />
          <path
            fillRule="evenodd"
            d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
          />
          <path
            fillRule="evenodd"
            d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
          />
        </symbol>
        <symbol id="bi-clipboard-check" fill="currentColor" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
          />
          <path
            fillRule="evenodd"
            d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
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
        className="row mx-0 pb-5"
        style={{
          background: "linear-gradient(90deg, #0c2646 0, #204065 60%, #2a5788)",
        }}
      >
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
                  <a
                    className="nav-link active text-uppercase text-primary"
                    aria-current="page"
                    href="#"
                  >
                    <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                      <use xlinkHref="#bi-house-door" />
                    </svg>
                    <p className="ml-3 d-inline">Home</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="html/Alarm.html">
                    <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                      <use xlinkHref="#bi-bell" />
                    </svg>
                    <p className="ml-3 d-inline">Alarms</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase"
                    href="html/Profile.html"
                  >
                    <svg viewBox="0 0 16 16" width="1.2em" height="1.2em">
                      <use xlinkHref="#bi-gear" />
                    </svg>
                    <p className="ml-3 d-inline">Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="html/HowTo.html">
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

        <h4 className="mt-4 font-weight-bold text-center text-white">
          Daily Statistics
        </h4>
        <canvas
          id="respikar-day-chart"
          className="container py-3"
          height="300px"
          aria-label="Chart for Day Statistics"
          role="img"
        />
      </section>

      <div
        className="container bg-light py-4 text-center"
        style={{ fontFamily: "Montserrat,Helvetica Neue,Arial,sans-serif" }}
      >
        <div
          className="row row-cols-lg-4 mx-3 shadow-lg rounded"
          style={{ marginTop: "-60px" }}
        >
          <div className="col-12 bg-white p-2">
            <svg
              className="mt-3"
              viewBox="0 0 16 16"
              width="3em"
              height="3em"
              style={{ color: "#0d6efd" }}
            >
              <use xlinkHref="#bi-check2" />
            </svg>
            <h3
              id="label-inhaler-completed"
              className="mt-1"
              style={{ fontWeight: 700, fontSize: "xx-large" }}
            >
              16
            </h3>
            <h6 className="text-muted small" style={{ fontWeight: 400 }}>
              COMPLETED
            </h6>
          </div>
          <div className="col-12 bg-white p-2">
            <svg
              className="mt-3"
              viewBox="0 0 16 16"
              width="3.8em"
              height="3.8em"
              style={{ color: "#dc3545" }}
            >
              <use xlinkHref="#bi-x" />
            </svg>
            <h3
              id="label-inhaler-rejected"
              className="mt-1"
              style={{ fontWeight: 700, fontSize: "xx-large" }}
            >
              16
            </h3>
            <h6 className="text-muted small" style={{ fontWeight: 400 }}>
              REJECTED
            </h6>
          </div>
          <div className="col-12 bg-white p-2">
            <svg
              className="mt-3"
              viewBox="0 0 16 16"
              width="2.5em"
              height="2.5em"
              style={{ color: "#ffc107" }}
            >
              <use xlinkHref="#bi-clock-history" />
            </svg>
            <h3
              id="label-inhaler-missing"
              className="mt-3"
              style={{ fontWeight: 700, fontSize: "xx-large" }}
            >
              16
            </h3>
            <h6 className="text-muted small" style={{ fontWeight: 400 }}>
              MISSING
            </h6>
          </div>
          <div className="col-12 bg-white p-2">
            <svg
              className="mt-3"
              viewBox="0 0 16 16"
              width="2.5em"
              height="2.5em"
              style={{ color: "#198754" }}
            >
              <use xlinkHref="#bi-clipboard-check" />
            </svg>
            <h3
              id="label-inhaler-next-month"
              className="mt-3"
              style={{ fontWeight: 700, fontSize: "xx-large" }}
            >
              16
            </h3>
            <h6 className="text-muted small" style={{ fontWeight: 400 }}>
              NEXT MONTH
            </h6>
          </div>
        </div>
      </div>
      <section
        className="row mx-0 bg-light pt-3 pb-5"
        style={{ borderRadius: "30px 0 0 0" }}
      >
        <p className="text-center text-muted">Copyright © 2020. J &amp; J</p>
      </section>

      <footer className="bg-light mt-auto py-2 border-top fixed-bottom d-block d-sm-none">
        <div className="container mx-0 row row-cols-4 gx-5">
          <a className="col" href="#">
            <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
              <use xlinkHref="#bi-house-door" />
            </svg>
          </a>
          <a className="col text-muted" href="html/Alarm.html">
            <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
              <use xlinkHref="#bi-bell" />
            </svg>
          </a>
          <a className="col text-muted" href="html/HowTo.html">
            <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
              <use xlinkHref="#bi-book" />
            </svg>
          </a>
          <a className="col text-muted" href="html/Profile.html">
            <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
              <use xlinkHref="#bi-gear" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
