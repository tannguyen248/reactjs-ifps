import React, { useContext } from "react";
import { EditorContext, ADD_LAYER } from "../context/EditorProvider";
import styles from "./Sidebar.module.scss";
import SidebarContent from "./SidebarContent";
import SidebarContentImage from "./SidebarContentImage";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ images }) => {
  const { dispatch } = useContext(EditorContext);

  const handleCliclItem = (item) => {
    dispatch({ type: ADD_LAYER, payload: item });
  };
  return (
    <div className={styles.sidebar}>
      <SidebarMenu />
      <SidebarContent>
        <SidebarContentImage images={images} onClickItem={handleCliclItem} />
      </SidebarContent>
    </div>
  );
};

export default Sidebar;
