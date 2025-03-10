// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ShinyEffect = ({ left, right, top, size = 500 }) => {
  const positionStyle = {
    top: `${top}px`,
    with: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
  };

  if (left !== undefined) {
    positionStyle.left = `${left}px`;
  }
  if (right !== undefined) {
    positionStyle.right = `${right}px`;
  }
  return <div className="shinny-effect" style={positionStyle}></div>;
};

export default ShinyEffect;
