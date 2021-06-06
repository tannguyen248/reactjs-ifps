import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarContent from "./SidebarContent";
import SidebarContentImage from "./SidebarContentImage";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ images }) => {
  return (
    <div className={styles.sidebar}>
      <SidebarMenu />
      <SidebarContent>
        <SidebarContentImage images={images} />
      </SidebarContent>
    </div>
  );
};

export default Sidebar;
