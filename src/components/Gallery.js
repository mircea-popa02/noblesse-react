import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./Gallery.css";

import { Form, Input, TextArea } from "semantic-ui-react";

const Gallery = () => {
  const [language, setLanguage] = useState("");
  const [itemInfo, setItemInfo] = useState([]);
  const [type, setType] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "flowers"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItemInfo(newData);
        console.log("done");
        return newData; // Returning newData for chaining
      })
      .then((newData) => {
        // Chaining another then block
        const filters = localStorage.getItem("filters");
        if (filters) {
          console.log(filters.toLowerCase());
          changeType(filters.toLowerCase(), newData); // Passing newData to changeType
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const changeType = (type, newData) => {
    setType(type);
    console.log(newData); // Now newData should contain the updated data
    const filtered = newData.filter((item) => item.id === type);
    setFilteredItems(Object.values(filtered[0])[0]);
  };

  const setTypeFilter = (type) => {
    setType(type);
    localStorage.setItem("filters", type);
    const filtered = itemInfo.filter((item) => item.id === type);
    setFilteredItems(Object.values(filtered[0])[0]);
  };

  const passLanguage = (language) => {
    setLanguage(language);
    localStorage.setItem("language", language);
  };

  useEffect(() => {
    fetchPost();
    const data = localStorage.getItem("language");
    if (data) {
      setLanguage(data);
    }
  }, []);

  return (
    <div>
      <Title></Title>
      <Header sticky="top" passLanguage={passLanguage} />
      {/* // TODO - Add a search bar to filter the items by name */}

      {/* // TODO - write filters to localstorage and read from them on useffect */}

      <div className="search-container">
        <h1 className="scroll-title">
          {language === "RO" ? "Filtre de căutare" : "Search filters"}
        </h1>
        {<div className="line"></div>}

        {/* search form */}
        <Form>
          <Form.Group>
            <Form.Field
              control={Input}
              placeholder={language === "RO" ? "Caută" : "Search"}
            />
            <Form.Field
              control={Input}
              placeholder={language === "RO" ? "Preț minim" : "Min price"}
            />
            <Form.Field
              control={Input}
              placeholder={language === "RO" ? "Preț maxim" : "Max price"}
            />
          </Form.Group>
        </Form>

        <div className="chip-container">
          <button
            className="btn-green chip"
            onClick={() => setTypeFilter("bouquets")}
          >
            {language === "RO" ? "Buchete" : "Bouquets"}
          </button>
          <button
            className="btn-green chip"
            onClick={() => setTypeFilter("baskets")}
          >
            {language === "RO" ? "Coșuri" : "Baskets"}
          </button>
        </div>
      </div>

      {/* // TODO - add color filters for the items */}

      <div className="gallery-container">
        {type !== "" && (
          <>
            <h2 className="scroll-title">
              {type === "bouquets"
                ? language === "RO"
                  ? "Buchete"
                  : "Bouquets"
                : language === "RO"
                ? "Coșuri"
                : "Baskets"}
            </h2>
            {<div className="line"></div>}
            <div className="gallery">
              {filteredItems.map((item, index) => {
                return (
                  <div key={index} className="gallery-item">
                    <img
                      className="product-image"
                      src={item.link}
                      alt={item.title}
                    />
                    <div className="description-container">
                      <div>
                        <h3>{item.title}</h3>
                        <div className="line"></div>
                        <div className="chip-container">
                          <div className="d-flex flex-wrap">
                            {item.description.map((desc, index) => {
                              return (
                                <span
                                  className="chip d-flex justify-content-center align-items-center"
                                  key={index}
                                >
                                  {desc}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <button className="btn-dark-green">
                        {language === "RO" ? "Cumpără" : "Buy"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <Footer language={language} />
    </div>
  );
};

export default Gallery;
