import React from "react";
import Moveable from "react-moveable";

const Movable = ({ elementRef }) => {
  if (!elementRef.current) {
    return null;
  }

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
      onDragStart={(e) => {
        const translate = [
          Number.parseFloat(e.target.dataset.translatex),
          Number.parseFloat(e.target.dataset.translatey),
        ];

        console.log(translate);
        e.set(translate);
      }}
      onDrag={(e) => {
        e.target.setAttribute("data-translatex", e.beforeTranslate[0]);
        e.target.setAttribute("data-translatey", e.beforeTranslate[1]);
        e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
      }}
    />
  );
};

export default Movable;
