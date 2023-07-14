import * as React from "react";

const BlackCircle = (props) => (
  <svg
    {...props}
    width={20}
    height={20}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.503 0C4.71 0 0 4.709 0 10.497S4.709 21 10.503 21c5.788 0 10.503-4.709 10.503-10.503C21 4.709 16.291 0 10.503 0Zm4.543 8.35-5.5 5.5a.84.84 0 0 1-.6.246.876.876 0 0 1-.601-.245L5.954 11.46a.844.844 0 0 1 0-1.196.844.844 0 0 1 1.195 0l1.797 1.796 4.899-4.899a.844.844 0 0 1 1.195 0 .831.831 0 0 1 .006 1.19Z"
      fill="#fff"
    />
  </svg>
);

export default BlackCircle;

