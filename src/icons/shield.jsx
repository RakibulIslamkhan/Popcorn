import * as React from "react";

const Shield = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 128"
    width="2em"
    height="2em"
  >
    <title>{"Artboard 1"}</title>
    <path
      d="M48 128a2 2 0 0 1-.93-.23 128.38 128.38 0 0 1-23.4-16.53C8.18 97.44 0 82.49 0 68V20a2 2 0 0 1 1.27-1.86l46-18a1.94 1.94 0 0 1 1.46 0l46 18A2 2 0 0 1 96 20v48c0 14.49-8.18 29.44-23.67 43.24a128.38 128.38 0 0 1-23.4 16.53 2 2 0 0 1-.93.23ZM4 21.37V68c0 29.76 37.57 52.12 44 55.72 6.43-3.6 44-26 44-55.72V21.37L48 4.15Z"
      style={{
        fill: "#001b41",
      }}
    />
    <path
      d="M46 80a2 2 0 0 1-1.41-.59l-20-20a2 2 0 0 1 2.82-2.82L45.8 75l24.61-32.21a2 2 0 0 1 3.18 2.42l-26 34a2 2 0 0 1-1.46.79Z"
      style={{
        fill: "#0b9dcc",
      }}
    />
  </svg>
);

export default Shield;
