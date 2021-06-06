import React from "react";
import Layer from "./Layer";

const LayerImage = ({ layer = {} }) => {
  const { id, config = {} } = layer;
  const width = 200;
  const height = width / config.ratio;

  if (!layer) {
    return null;
  }

  return (
    <Layer id={id} width={width} height={height}>
      <img
        crossOrigin="anonymous"
        src={config.webformatURL}
        width={width}
        height={height}
      />
    </Layer>
  );
};

export default LayerImage;
