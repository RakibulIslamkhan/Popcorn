import * as React from "react";

const Moon = (props) => (
  <svg
    {...props}
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.875 13.323A9.375 9.375 0 1 1 11.677 3.125a7.292 7.292 0 0 0 10.198 10.198v0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Moon;
