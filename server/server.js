const express = require("express");
const multer = require("multer");
const { create } = require("ipfs-http-client");

const ipfs = create("http://localhost:5001");
const app = express();
const upload = multer();
app.set("view engine", "ejs");

const addFile = async ({ path, content }) => {
  const file = { path, content };
  const { cid } = await ipfs.add(file);
  return cid;
};

app.get("/", (req, res) => {
  return res.send("ipfs app");
});

app.post("/upload", upload.any(), async (req, res) => {
  const data = req.files;

  if (!data || data.length === 0) {
    res.statusCode = 400;
    return res.send("Missing files");
  }

  const file = data[0];
  const buffered = Buffer.from(file.buffer, "binary");
  const cid = await addFile({ path: file.fieldname, content: buffered });

  return res.send(`https://gateway.ipfs.io/ipfs/${cid}`);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
