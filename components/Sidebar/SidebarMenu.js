import React from "react";
import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CategoryIcon from "@material-ui/icons/Category";
import PhotoIcon from "@material-ui/icons/Photo";
import styles from "./Sidebar.module.scss";

const SidebarMenu = () => {
  return (
    <div className={styles.menu}>
      <IconButton>
        <PhotoIcon />
      </IconButton>
      <IconButton>
        <CategoryIcon />
      </IconButton>
    </div>
  );
};

export default SidebarMenu;
