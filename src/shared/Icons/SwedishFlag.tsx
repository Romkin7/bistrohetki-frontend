import React from "react";

const SwedishFlag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 60 40"
    width={props.width || 32}
    height={props.height || 24}
    {...props}
  >
    <rect width="60" height="40" fill="#006aa7" />
    <rect x="17" width="6" height="40" fill="#fecc00" />
    <rect y="17" width="60" height="6" fill="#fecc00" />
  </svg>
);

export default SwedishFlag;
