import * as React from "react";

const Certificate = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="3em"
    height="3em"
  >
    <path
      style={{
        fill: "#1474c4",
      }}
      d="m16 44 8-4v-7h-8v11z"
    />
    <path
      style={{
        fill: "#001b41",
      }}
      d="M32 44V33h-8v7l8 4z"
    />
    <circle
      cx={24}
      cy={20}
      r={16}
      style={{
        fill: "#95caeb",
      }}
    />
    <path
      d="M24 32.5c-6.893 0-12.5-5.607-12.5-12.5S17.107 7.5 24 7.5 36.5 13.107 36.5 20 30.893 32.5 24 32.5Zm0-24c-6.341 0-11.5 5.159-11.5 11.5S17.659 31.5 24 31.5 35.5 26.341 35.5 20 30.341 8.5 24 8.5Z"
      style={{
        fill: "#001b41",
      }}
    />
    <path
      d="M22 24.5c-.015 0-.029 0-.044-.002a.502.502 0 0 1-.393-.255l-2.5-4.501a.5.5 0 0 1 .874-.486l2.141 3.854 6.034-7.426a.501.501 0 0 1 .777.631l-6.5 8a.502.502 0 0 1-.388.185Z"
      style={{
        fill: "#001b41",
      }}
    />
  </svg>
);

export default Certificate;

