import React from "react";
import Moveable from "react-moveable";

const Movable = ({ elementRef }) => {
  return (
    <Moveable
      target={elementRef.current}
      container={null}
      origin={true}
      scalable={false}
      warpable={false}
      pinchable={false}
      edge={false}
      keepRatio={true}
      draggable={true}
      throttleDrag={10}
      onDragStart={({ target, clientX, clientY }) => {
        console.log("onDragStart", target);
      }}
      onDrag={({
        target,
        beforeDelta,
        beforeDist,
        left,
        top,
        right,
        bottom,
        delta,
        dist,
        transform,
        clientX,
        clientY,
      }) => {
        console.log("onDrag left, top", left, top);
        // target!.style.left = `${left}px`;
        // target!.style.top = `${top}px`;
        console.log("onDrag translate", dist);
        target.style.transform = transform;
      }}
      onDragEnd={({ target, isDrag, clientX, clientY }) => {
        console.log("onDragEnd", target, isDrag);
      }}
      resizable={true}
      throttleResize={0}
      onResizeStart={({ target, clientX, clientY }) => {
        console.log("onResizeStart", target);
      }}
      onResize={({
        target,
        width,
        height,
        dist,
        delta,
        direction,
        clientX,
        clientY,
      }) => {
        console.log("onResize", target);
        delta[0] && (target.style.width = `${width}px`);
        delta[1] && (target.style.height = `${height}px`);
      }}
      onResizeEnd={({ target, isDrag, clientX, clientY }) => {
        console.log("onResizeEnd", target, isDrag);
      }}
      rotatable={true}
      throttleRotate={0}
      onRotateStart={({ target, clientX, clientY }) => {
        console.log("onRotateStart", target);
      }}
      onRotate={({ target, delta, dist, transform, clientX, clientY }) => {
        console.log("onRotate", dist);
        target.style.transform = transform;
      }}
      onRotateEnd={({ target, isDrag, clientX, clientY }) => {
        console.log("onRotateEnd", target, isDrag);
      }}
    />
  );
};

export default Movable;
