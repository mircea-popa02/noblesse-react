import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Tab, Tabs } from "react-bootstrap";
import { Input } from "semantic-ui-react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Gallery.css";


const Gallery = () => {
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [itemInfo, setItemInfo] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);


  const typeTranslatorMap = {
    bouquets: "buchete",
    baskets: "coșuri",
    wreaths: "coroane"
  };

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

    setType("all");
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

  // TODO: Add a loading spinner
  // TODO: Add color search filters (optional: add color array in firebase)
  // TODO: Add chip selector

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
            {language === "RO" ? "Caută produsul dorit" : "Search for the desired product"}
          </p>

          <Input
            className="w-100"
            placeholder={language === "RO" ? "Caută" : "Search"}
            name="search"
            onChange={(e) => {
              handleSearch(e);
            }}
          />

          <br></br>
          <br></br>

          <Tabs
            id="type-selector"
            className="mb-3"
            onSelect={(key) => setTypeFilter(key)}
            defaultActiveKey="bouquets" // Set the default active tab to "bouquets"
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
        {type !== "" && type !== "all" && filteredItems.length > 0 ?
          (
            <>
              <h1 className="scroll-title">
                {language === "RO" ? typeTranslatorMap[type].charAt(0).toUpperCase() + typeTranslatorMap[type].slice(1) : type.charAt(0).toUpperCase() + type.slice(1)}
              </h1>
              <div className="line"></div>
            </>
          ) :
          (
            filteredItems.length > 0 &&
            <>
              <h1 className="scroll-title">
                {language === "RO" ? "Rezultate" : "Results"}
              </h1>
              <div className="line"></div>
            </>
          )
        }
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
                  {/* <div>
                    <h4>{language === "RO" ? item.title.ro : item.title.en}</h4>
                    <div className="line"></div>
                  </div> */}
                  <OffCanvasExample placement="end" language={language} item={item} />
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

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(props.item);

  return (
    <>
      <button variant="primary" onClick={handleShow} className="me-2 btn-green">
        {props.language === "RO" ? "Detalii" : "Details"}
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title className="offcanvas-title">
            <h2>
              {props.language === "RO" ? props.item.title.ro : props.item.title.en}
            </h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvs-body">
          <div>
            <div className="chip-container">
              <div className="d-flex flex-wrap">
                {props.language === "RO" ? props.item.description.ro.map((desc, index) => {
                  return (
                    <span
                      className="chip d-flex justify-content-center align-items-center"
                      key={index}
                    >
                      {desc}
                    </span>
                  );
                }
                ) : props.item.description.en.map((desc, index) => {
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
            <img
              className="offcanvas-image"
              src={props.item.link}
              alt={props.language === "RO" ? props.item.title.ro : props.item.title.en}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Gallery;
