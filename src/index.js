import React from "react";
import ReactDOM from "react-dom/client";
import Speakers from "./components/speakers/speakers";
import "./index.css";
import Paragraph from "./components/paragraph";
import Counter from "./components/counter";
import Instagram from "./components/instagram/instagram";
import image5 from "./images/img5.jpg";
import image3 from "./images/img3.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Instagram imageUrl={image3} />
    {/*  <Speakers />
    <Paragraph title="mon paragraph">
      <h1>this is my text</h1>
      <h3>Another one</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        tenetur aliquam obcaecati maiores adipisci. Dignissimos minima facere
        inventore ducimus necessitatibus, consectetur quisquam at molestiae.
        Quaerat facilis ea sequi! Modi, sit!
      </p>
    </Paragraph> */}
  </React.StrictMode>
);
