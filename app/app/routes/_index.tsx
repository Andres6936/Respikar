import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import RefSVG from "~/layout/RefSVG";
import TopNavigator from "~/layout/TopNavigator";
import BottomNavigator from "~/layout/BottomNavigator";

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
  return [{ title: "Respikar" }];
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
      <section
        className="row mx-0 pb-5"
        style={{
          background: "linear-gradient(90deg, #0c2646 0, #204065 60%, #2a5788)",
        }}
      >
        <RefSVG />
        <TopNavigator />

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

      <BottomNavigator />
    </>
  );
}
