import React from "react";
import { Component } from "react";
import image1 from "../../images/img1.jpg";
import image2 from "../../images/img2.jpg";
import image3 from "../../images/img3.jpg";
import image4 from "../../images/img4.jpg";
import image5 from "../../images/img5.jpg";
import Speaker from "../speaker/speaker";
import style from "./speakers.module.css";

class Speakers extends Component {
  render() {
    return (
      <>
        <section className={style.speakers}>
          <div className="container">
            <div className={style.top}>
              <div className={style.description}>
                <h2>
                  Our <span>Speakers</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, provident.
                </p>
              </div>
              <Speaker
                img={image1}
                job="Event Manager"
                name="Natalie"
                height="350px"
              />
            </div>
            <div className={style.bottom}>
              <Speaker img={image2} job="Event Manager" name="Ablam" />
              <Speaker img={image3} job="Event Manager" name="Ranya" />
              <Speaker img={image4} job="Event Manager" name="Yassine" />
              <Speaker img={image5} job="Event Manager" name="Taha" />
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Speakers;
