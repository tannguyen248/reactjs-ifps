import React from "react";
import Moveable from "react-moveable";

const Movable = ({ elementRef }) => {
  return (
    <Moveable
      target={elementRef.current}
      container={document.querySelector("#editor")}
      origin={false}
      scalable={false}
      warpable={false}
      pinchable={false}
      rotatable={false}
      edge={false}
      keepRatio={true}
      draggable={true}
      throttleDrag={10}
      dragArea={true}
      onDrag={(e) => {
        e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
      }}
    />
  );
};

export default Movable;
