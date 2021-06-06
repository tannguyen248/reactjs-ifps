import React, { useContext } from "react";
import styles from "./Editor.module.scss";
import { toJpeg } from "html-to-image";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import { EditorContext } from "../context/EditorProvider";
import LayerImage from "./LayerImage";

const Editor = () => {
  const { state } = useContext(EditorContext);

  const handlePublish = () => {
    var node = document.getElementById("editor");

    toJpeg(node, {
      filter: (node) => !node.classList.contains("moveable-line"),
    })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
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
