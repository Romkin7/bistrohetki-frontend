import React from "react";

const FinnishFlag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 60 40"
    width={props.width || 32}
    height={props.height || 24}
    {...props}
  >
    {/* White background */}
    <rect width="60" height="40" fill="#fff" />
    {/* Blue vertical cross */}
    <rect x="16" width="8" height="40" fill="#003580" />
    {/* Blue horizontal cross */}
    <rect y="16" width="60" height="8" fill="#003580" />
  </svg>
);

export default FinnishFlag;
