import React from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "@use-gesture/react";
import { useNavigate } from "react-router-dom";
import "./ScrollCards.css";

function clamp(scroll) {
  return Math.max(-40, Math.min(scroll, 40));
}

const Cards = (props) => {
  const { language } = props;
  const navigate = useNavigate();

  const cardContent = [
    { src: "pic1.jpg", ro: "Buchete", en: "Bouquets" },
    { src: "pic3.jpg", ro: "Coșuri", en: "Baskets" },
    { src: "pic4.jpg", ro: "Coroane", en: "Wreaths" },
  ];

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
      <div className="scroll-header d-flex flex-column align-items-center">
        <h1 className="scroll-title">
          {language === "RO" ? "Galerie" : "Gallery"}
        </h1>
        <div className="line no-margin"></div>
      </div>
      <div className="d-block d-flex justify-content-center">
        <div className="container-scroll" {...bind()}>
          {cardContent.map(({ src, ro, en }) => (
            <animated.div
              key={src}
              className="card-scroll"
              style={{
                ...style,
                backgroundImage: `url(${src})`,
              }}
              onClick={() => {
                localStorage.setItem("filters", en);
                navigate(`/gallery?type=${en.toLowerCase()}`);
              }}
            >
              <div className="card-scroll-content d-flex align-items-center justify-content-center">
                <h3>{language === "RO" ? ro : en}</h3>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
