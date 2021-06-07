import React from "react";
import styles from "./Sidebar.module.scss";

const SidebarContent = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default SidebarContent;
