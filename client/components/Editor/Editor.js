import React, { useContext } from "react";
import styles from "./Editor.module.scss";
import { toBlob } from "html-to-image";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import { EditorContext } from "../context/EditorProvider";
import LayerImage from "./LayerImage";
import { captureImage, uploadToServer } from "../../helper/func";

const filterMoveable = (node) => !node.classList.contains("moveable-line");

const Editor = () => {
  const { state } = useContext(EditorContext);

  const handlePublish = async () => {
    var node = document.getElementById("editor");

    const formData = await captureImage(node, filterMoveable);
    const result = await uploadToServer(formData);

    console.log({ result });
  };

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Button
          variant="outlined"
          endIcon={<PublishIcon />}
          onClick={handlePublish}
        >
          Publish
        </Button>
      </div>
      <div className={styles.editor} id="editor">
        {state.layers.map((layer) => (
          <LayerImage key={layer.id} layer={layer} />
        ))}
      </div>
    </div>
  );
};

export default Editor;
