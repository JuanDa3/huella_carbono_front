import axios from "axios";
import React from "react";
import InitialMenu from "./InitialMenu";

const baseURL = "http://localhost:8000/prove-from-react/";

export default function Prove() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "prueba del post gg",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
        alert(response.data);
      });
  }

  return (
    <div>
      <InitialMenu disable={"hidden"} />
      <h1>hola</h1>
      <p>beba</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
