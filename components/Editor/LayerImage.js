import React, { useRef } from "react";
import Image from "next/image";
import Movable from "../Movable";
import Layer from "./Layer";

const LayerImage = () => {
  return (
    <Layer>
      <Image
        src="https://pixabay.com/get/g0656e87b6153414946fbce33da02de11c4de7ec06b5ab699151c74963b42cfe1923d487b85b60c1306710c93378d127375cb1c009299d2bdf735b340d44e859d_1280.jpg"
        width={200}
        height={200}
      />
    </Layer>
  );
};

export default LayerImage;
