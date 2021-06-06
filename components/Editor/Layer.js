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
    <div className={styles.layer}>
      <div ref={ref} style={{ height: 200, width: 200 }}>
        {props.children}
      </div>
      {isRendered && <Movable elementRef={ref} />}
    </div>
  );
};

export default Layer;
