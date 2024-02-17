import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Tab, Tabs } from "react-bootstrap";
import { Input } from "semantic-ui-react";
import "./Gallery.css";


const Gallery = () => {
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [itemInfo, setItemInfo] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "flowers"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItemInfo(newData);
        return newData;
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setFilteredItems([]);
      return;
    }

    let mergedItems = itemInfo.map((item) => {
      return Object.values(item)[0];
    });

    mergedItems = mergedItems.flat();

    mergedItems = mergedItems.filter((item) => {
      return (
        item.title.ro.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.title.en.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.description.ro
          .join(" ")
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        item.description.en
          .join(" ")
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });

    setFilteredItems(mergedItems);
    console.log(filteredItems);
  };

  const setTypeFilter = (type) => {
    setType(type);
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
      <div className="search-wrapper">
        <div className="search-container">
          <h1 className="scroll-title">
            {language === "RO" ? "Căutare" : "Search"}
          </h1>
          {<div className="line"></div>}

          <p>
            {language === "RO" ? "Alege tipul de produs pe care îl cauți" : "Choose the type of product you are looking for"}
          </p>

          <Input
            placeholder={language === "RO" ? "Caută" : "Search"}
            name="search"
            onChange={(e) => {
              handleSearch(e);
            }}
          />

          <Tabs
            id="uncontrolled-tab-example"
            className="mb-3"
            onSelect={(key) => setTypeFilter(key)}
          >
            <Tab eventKey="bouquets" title={language === "RO" ? "Buchete" : "Bouquets"}>
            </Tab>
            <Tab eventKey="baskets" title={language === "RO" ? "Coșuri" : "Baskets"}>
            </Tab>
            <Tab eventKey="wreaths" title={language === "RO" ? "Coroane" : "Wreaths"} disabled>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery">
          {filteredItems.map((item, index) => {
            return (
              <div key={index} className="gallery-item">
                <img
                  className="product-image"
                  src={item.link}
                  alt={language === "RO" ? item.title.ro : item.title.en}
                />
                <div className="description-container">
                  <div>
                    <h3>{language === "RO" ? item.title.ro : item.title.en}</h3>
                    <div className="line"></div>
                    <div className="chip-container">
                      <div className="d-flex flex-wrap">
                        {language === "RO" ? item.description.ro.map((desc, index) => {
                          return (
                            <span
                              className="chip d-flex justify-content-center align-items-center"
                              key={index}
                            >
                              {desc}
                            </span>
                          );
                        }
                        ) : item.description.en.map((desc, index) => {
                          return (
                            <span
                              className="chip d-flex justify-content-center align-items-center"
                              key={index}
                            >
                              {desc}
                            </span>
                          );
                        }
                        )}
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
      </div>

      <Footer language={language} />
    </div>
  );
};

export default Gallery;
