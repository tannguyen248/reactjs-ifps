import React, { useEffect, useRef, useState } from "react";
import styles from "./Editor.module.scss";
import Movable from "../Movable";

const Layer = (props) => {
  const [isRendered, setIsRendered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setIsRendered(true);
    }
  }, [ref.current]);

  return (
    <>
      <div
        className={styles.layer}
        id={props.id}
        ref={ref}
        data-translatex="0"
        data-translatey="0"
      >
        <div style={{ height: props.height, width: props.width }}>
          {props.children}
        </div>
      </div>
      {isRendered && <Movable elementRef={ref} />}
    </>
  );
};

export default Layer;
