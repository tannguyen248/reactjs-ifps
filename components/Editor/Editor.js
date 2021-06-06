import Image from "next/image";
import React from "react";
import styles from "./Editor.module.scss";
import Layer from "./Layer";
import LayerImage from "./LayerImage";

const Editor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <LayerImage></LayerImage>
      </div>
    </div>
  );
};

export default Editor;
