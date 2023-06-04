import { useEffect, useRef } from "react";

const PROPORTION_WITH_BROWSER_WINDOW = 0.6;
const PROPORTION_HOUR_ELEMENT_WITH_THE_SIZE_WRAP_DIV = 3.708154506;
const PROPORTION_MINUTE_ELEMENT_WITH_THE_SIZE_WRAP_DIV = 2.632140137;
const PROPORTION_SECOND_ELEMENT_WITH_THE_SIZE_WRAP_DIV = 3.852842809;

export default function Clock() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hourRef = useRef<HTMLSpanElement>(null);
  const minuteRef = useRef<HTMLSpanElement>(null);
  const secondRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (wrapRef.current && hourRef.current && minuteRef.current && secondRef.current) {
      const SIZE_WRAP_ELEMENT: number =
        windowWidth() * PROPORTION_WITH_BROWSER_WINDOW;

      const wrapElement: HTMLDivElement = wrapRef.current;
      wrapElement.style.width = SIZE_WRAP_ELEMENT + "px";
      wrapElement.style.height = SIZE_WRAP_ELEMENT + "px";

      const hourElement: HTMLSpanElement = hourRef.current;
      // @type{number} We calculate the size of hour element based in the size of analog clock
      const SIZE_HOUR_ELEMENT = SIZE_WRAP_ELEMENT / PROPORTION_HOUR_ELEMENT_WITH_THE_SIZE_WRAP_DIV;
      hourElement.style.height = SIZE_HOUR_ELEMENT + 'px'

      const minuteElement: HTMLSpanElement = minuteRef.current;
      // @type{number} We calculate the size of minute element based in the size of analog clock
      const SIZE_MINUTE_ELEMENT = SIZE_WRAP_ELEMENT / PROPORTION_MINUTE_ELEMENT_WITH_THE_SIZE_WRAP_DIV;
      minuteElement.style.height = SIZE_MINUTE_ELEMENT + 'px'

      const secondElement: HTMLSpanElement = secondRef.current;
      // @type{number} We calculate the size of second element based in the size of analog clock
      const SIZE_SECOND_ELEMENT = SIZE_WRAP_ELEMENT / PROPORTION_SECOND_ELEMENT_WITH_THE_SIZE_WRAP_DIV;
      secondElement.style.height = SIZE_SECOND_ELEMENT + 'px'
    }
  }, []);

  const windowWidth = (): number => document.documentElement.clientWidth;

  return (
    <section className="analog-clock my-4">
      <div className="clock">
        <div ref={wrapRef} className="wrap">
          <span ref={hourRef} className="hour" />
          <span ref={minuteRef} className="minute" />
          <span ref={secondRef} className="second" />
          <span className="dot" />
        </div>
      </div>
    </section>
  );
}
