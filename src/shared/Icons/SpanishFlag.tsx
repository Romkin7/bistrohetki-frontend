import React from "react";

const SpanishFlag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 60 40"
    width={props.width || 32}
    height={props.height || 24}
    {...props}
  >
    <rect width="60" height="40" fill="#AA151B" />
    <rect y="10" width="60" height="20" fill="#F1BF00" />
  </svg>
);

export default SpanishFlag;
