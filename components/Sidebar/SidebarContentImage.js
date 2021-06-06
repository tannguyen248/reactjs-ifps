import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import styles from "./Sidebar.module.scss";
import Image from "next/image";

const SidebarContentImage = ({ images }) => {
  const colFormats = [2, 1, 1, 1, 1, 1, 2];

  return (
    <GridList cellHeight={160} cols={3}>
      {images.map((tile, index) => (
        <GridListTile
          key={tile.id}
          cols={colFormats[index % colFormats.length]}
          className={styles.thumbnail}
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={tile.webformatURL}
            alt={tile.tags}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default SidebarContentImage;
