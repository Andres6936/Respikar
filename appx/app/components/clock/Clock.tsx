import type { LinksFunction } from "@remix-run/node";
import styles from '~/styles/Clock.css'
import { useEffect } from "react";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Clock() {
  useEffect(() => {}, []);

  return (
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
  );
}
