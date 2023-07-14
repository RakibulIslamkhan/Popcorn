import * as React from "react";

const Sun = (props) => (
  <svg
    {...props}
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.5 17.708a5.208 5.208 0 1 0 0-10.416 5.208 5.208 0 0 0 0 10.416ZM12.5 1.042v2.083M12.5 21.875v2.083M4.396 4.396l1.479 1.479M19.125 19.125l1.48 1.48M1.042 12.5h2.083M21.875 12.5h2.083M4.396 20.604l1.479-1.479M19.125 5.875l1.48-1.48" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Sun;
