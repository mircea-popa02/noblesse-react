import React from "react";
import { animated, useSpring } from "react-spring";

import "./ScrollCards.css";

import { useScroll } from "@use-gesture/react";
import { Button } from "react-bootstrap";

function clamp(scroll) {
  if (scroll > 40) {
    return 40;
  }
  if (scroll < -40) {
    return -40;
  }
  return scroll;
}

const Cards = (props) => {
  const language = props.language;

  const cardContent = new Map();

  language === "RO"
    ? cardContent.set("pic1.jpg", "Buchete")
    : cardContent.set("pic1.jpg", "Bouquets");
  language === "RO"
    ? cardContent.set("pic2.jpg", "Aranjamente")
    : cardContent.set("pic2.jpg", "Arrangements");
  language === "RO"
    ? cardContent.set("pic3.jpg", "Coșuri")
    : cardContent.set("pic3.jpg", "Baskets");
  language === "RO"
    ? cardContent.set("pic4.jpg", "Coroane")
    : cardContent.set("pic4.jpg", "Wreaths");

  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  return (
    <>
      <div className="d-block d-flex justify-content-center">
        <div className="container-scroll" {...bind()}>
          {[...cardContent].map(([src, val]) => (
            <animated.div
              key={src}
              className="card-scroll"
              style={{
                ...style,
                backgroundImage: `url(${src})`,
              }}
            >
              <div className="card-scroll-content d-flex align-items-center justify-content-center">
                <h3>{val}</h3>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
