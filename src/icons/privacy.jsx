import * as React from "react"

const Privacy = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 128"
    width="2.5em"
    height="2.5em"
  >
    <title>{"shield-lock"}</title>
    <path
      d="M66 52h-2v-6a16 16 0 0 0-32 0v6h-2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V54a2 2 0 0 0-2-2Zm-30-6a12 12 0 0 1 24 0v6H36Zm28 34H32V56h32Z"
      style={{
        fill: "#0b9dcc",
      }}
    />
    <path
      d="M46 67.45V74a2 2 0 0 0 4 0v-6.55a4 4 0 1 0-4 0Z"
      style={{
        fill: "#0b9dcc",
      }}
    />
    <path
      d="M48 128a2 2 0 0 1-.93-.23 128.38 128.38 0 0 1-23.4-16.53C8.18 97.44 0 82.49 0 68V20a2 2 0 0 1 1.27-1.86l46-18a1.94 1.94 0 0 1 1.46 0l46 18A2 2 0 0 1 96 20v48c0 14.49-8.18 29.44-23.67 43.24a128.38 128.38 0 0 1-23.4 16.53 2 2 0 0 1-.93.23ZM4 21.37V68c0 29.76 37.57 52.12 44 55.72 6.43-3.6 44-26 44-55.72V21.37L48 4.15Z"
      style={{
        fill: "#001b41",
      }}
    />
  </svg>
)

export default Privacy
