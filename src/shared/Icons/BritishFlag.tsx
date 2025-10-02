import React from "react";

const BritishFlag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 60 40"
    width={props.width || 32}
    height={props.height || 24}
    {...props}
  >
    {/* Blue background */}
    <rect width="60" height="40" fill="#00247d" />
    {/* White diagonals */}
    <polygon points="0,0 7,0 60,28 60,40 53,40 0,12" fill="#fff" />
    <polygon points="60,0 53,0 0,28 0,40 7,40 60,12" fill="#fff" />
    {/* Red diagonals */}
    <polygon points="0,0 3,0 60,26 60,32 57,32 0,6" fill="#cf142b" />
    <polygon points="60,0 57,0 0,26 0,32 3,32 60,6" fill="#cf142b" />
    {/* White cross */}
    <rect x="25" width="10" height="40" fill="#fff" />
    <rect y="15" width="60" height="10" fill="#fff" />
    {/* Red cross */}
    <rect x="27" width="6" height="40" fill="#cf142b" />
    <rect y="17" width="60" height="6" fill="#cf142b" />
  </svg>
);

export default BritishFlag;
