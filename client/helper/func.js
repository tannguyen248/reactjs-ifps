import { toBlob } from "html-to-image";

export const randomId = () => Math.random().toString(16).slice(2);

export const uploadToServer = async (formData) => {
  const result = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (res.status >= 400 && res.status < 600) {
        throw new Error("Bad response from server");
      }

      return res;
    })
    .then((res) => res.text())
    .catch((e) => {
      console.log(e);
    });

  return result;
};

export const captureImage = async (node, filter) => {
  try {
    const blob = await toBlob(node, {
      filter: filter,
    });

    let formData = new FormData();
    formData.append("fname", "test.png");
    formData.append("data", blob);

    return formData;
  } catch (e) {
    console.log(e);
  }
};
