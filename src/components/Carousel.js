import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Carousel.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function CarouselFadeExample(props) {
  const [itemInfo, setItemInfo] = useState([]);
  const language = props.language;

  const fetchPost = async () => {
    await getDocs(collection(db, "slideshow"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItemInfo(newData[0].metadata);
        console.log(newData[0].metadata);
      })
      .catch((error) => {
        console.error("Error fetching slideshow metadata:", error);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Carousel fade>
      {itemInfo.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            {item.type === "photo" ? (
              <img className="d-block w-100" src={item.link} alt={item.alt} />
            ) : (
              <video
                className="d-block w-100"
                src={item.link}
                alt={item.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                autoPlay
                loop
              />
            )}

            <Carousel.Caption>
              <div className="carousel-text">
                <h1>{language === "RO" ? item.title.ro : item.title.en}</h1>
                <p>{language === "RO" ? item.subtitle.ro : item.subtitle.en}</p>
              </div> 
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselFadeExample;
