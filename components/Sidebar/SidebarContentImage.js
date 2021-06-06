import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import { randomId } from "../../helper/func";

const SidebarContentImage = ({ images, onClickItem }) => {
  const colFormats = [2, 1, 1, 1, 1, 1, 2];

  const handleClick = (image) => {
    const layer = { id: randomId(), config: { ...image } };
    onClickItem(layer);
  };

  return (
    <GridList cellHeight={160} cols={3}>
      {images.map((image, index) => (
        <GridListTile
          key={image.id}
          cols={colFormats[index % colFormats.length]}
          className={styles.thumbnail}
          onClick={() => handleClick(image)}
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={image.webformatURL}
            alt={image.tags}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default SidebarContentImage;
