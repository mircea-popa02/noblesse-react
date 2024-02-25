import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Input } from "semantic-ui-react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, ButtonGroup } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

import "./Gallery.css";

const Gallery = () => {
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [itemInfo, setItemInfo] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const typeTranslatorMap = {
    bouquets: "buchete",
    baskets: "coșuri",
    wreaths: "coroane",
  };

  const colorsMap = {
    red: "#FF0000",
    yellow: "#FFFF00",
    green: "#008000",
    blue: "#0000FF",
    purple: "#800080",
    orange: "#FFA500",
    pink: "#FFC0CB",
    white: "#FFFFFF",
    black: "#000000",
    brown: "#A52A2A",
  };

  const flowerTypes = [
    "trandafiri",
    "crini",
    "gerbera",
    "lalele",
    "alstroemeria",
    "frezii",
    "hortensii",
    "iris",
    "gypsophila",
    "crizanteme",
    "anthurium",
    "orchidee",
  ];

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
    setCurrentPage(1);

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
  };

  const setTypeFilter = (type) => {
    setType(type);
    setCurrentPage(1);
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
      <div className="gallery-wrapper">
        <div className="search-wrapper">
          <div className="search-container">
            <h1 className="scroll-title">
              {language === "RO" ? "Căutare" : "Search"}
            </h1>
            {<div className="line"></div>}

            <Input
              className="w-100 input-search"
              style={{ marginBottom: "8px" }}
              placeholder={language === "RO" ? "Caută" : "Search"}
              name="search"
              onChange={(e) => {
                handleSearch(e);
              }}
            />

            <p>{language === "RO" ? "Filtrează după tip" : "Filter by type"}</p>

            <ButtonGroup className="mb-3 w-100" aria-label="type-selector">
              <Button
                className="type-selector left-border btn-small"
                variant={type === "bouquets" ? "primary" : "outline-primary"}
                onClick={() => setTypeFilter("bouquets")}
              >
                {language === "RO" ? "Buchete" : "Bouquets"}
              </Button>
              <Button
                className="type-selector btn-small"
                variant={type === "baskets" ? "primary" : "outline-primary"}
                onClick={() => setTypeFilter("baskets")}
              >
                {language === "RO" ? "Coșuri" : "Baskets"}
              </Button>
              <Button
                className="type-selector right-border btn-small"
                variant={type === "wreaths" ? "primary" : "outline-primary"}
                onClick={() => setTypeFilter("wreaths")}
              >
                {language === "RO" ? "Coroane" : "Wreaths"}
              </Button>
            </ButtonGroup>

            {/* <div className="d-flex flex-wrap">
              {Object.keys(colorsMap).map((color, index) => {
                return (
                  <div
                    key={index}
                    className="color-circle"
                    style={{ backgroundColor: colorsMap[color] }}
                  ></div>
                );
              })}
            </div>
            <div className="d-flex flex-wrap">
              {flowerTypes.map((type, index) => {
                return (
                  <span
                    className="chip clickable d-flex justify-content-center align-items-center"
                    key={index}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                );
              })}
            </div> */}
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-title">
            {type !== "" && type !== "all" && filteredItems.length > 0 ? (
              <>
                <h1 className="scroll-title">
                  {language === "RO"
                    ? typeTranslatorMap[type].charAt(0).toUpperCase() +
                      typeTranslatorMap[type].slice(1)
                    : type.charAt(0).toUpperCase() + type.slice(1)}
                </h1>
                <div className="line"></div>
              </>
            ) : (
              filteredItems.length > 0 && (
                <>
                  <h1 className="scroll-title">
                    {language === "RO" ? "Rezultate" : "Results"}
                  </h1>
                  <div className="line"></div>
                </>
              )
            )}

            {Math.ceil(filteredItems.length / itemsPerPage) > 1 && (
              <div className="pagination">
                <p>
                  {language === "RO" ? "Pagina" : "Page"}{" "}
                  <strong>
                    {currentPage} {language === "RO" ? "din" : "of"}{" "}
                    {Math.ceil(filteredItems.length / itemsPerPage)}
                  </strong>
                </p>
              </div>
            )}
          </div>

          <div className="gallery">
            {currentItems.map((item, index) => {
              return (
                <div key={index} className="gallery-item">
                  <OffCanvasExample
                    placement={isMobile ? "bottom" : "end"}
                    language={language}
                    item={item}
                  />
                </div>
              );
            })}
          </div>
          <div className="pagination-container">
            {Math.ceil(filteredItems.length / itemsPerPage) > 1 && (
              <Pagination>
                <Pagination.Prev
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }}
                />

                {Array.from(
                  { length: Math.ceil(filteredItems.length / itemsPerPage) },
                  (_, i) => {
                    if (
                      Math.abs(i + 1 - currentPage) <= 1 ||
                      i === 0 ||
                      i ===
                        Math.ceil(filteredItems.length / itemsPerPage) - 1 ||
                      (i >= currentPage - 2 && i <= currentPage + 2)
                    ) {
                      return (
                        <Pagination.Item
                          key={i + 1}
                          active={i + 1 === currentPage}
                          onClick={() => paginate(i + 1)}
                        >
                          {i + 1}
                        </Pagination.Item>
                      );
                    } else if (
                      (i === 1 && currentPage > 4) ||
                      (i ===
                        Math.ceil(filteredItems.length / itemsPerPage) - 2 &&
                        currentPage <
                          Math.ceil(filteredItems.length / itemsPerPage) - 3)
                    ) {
                      return <Pagination.Ellipsis key={i + 1} />;
                    } else {
                      return null;
                    }
                  }
                )}

                <Pagination.Next
                  onClick={() => {
                    if (
                      currentPage <
                      Math.ceil(filteredItems.length / itemsPerPage)
                    ) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                />
              </Pagination>
            )}
          </div>
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
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function truncate(str, n) {
    return str?.length > n
      ? str.substr(0, str.lastIndexOf(" ", n)) + "..."
      : str;
  }

  return (
    <>
      <img
        className="product-image"
        src={props.item.link}
        alt={
          props.language === "RO" ? props.item.title.ro : props.item.title.en
        }
        onClick={handleShow}
      />
      <p className="title-product" onClick={handleShow}>
        {`${
          props.language === "RO"
            ? truncate(props.item.title.ro, isMobile ? 16 : 26)
            : truncate(props.item.title.en, isMobile ? 16 : 26)
        }`}
      </p>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title className="offcanvas-title">
            <h3>
              {props.language === "RO"
                ? props.item.title.ro
                : props.item.title.en}
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <div>
            <img
              className="offcanvas-image"
              src={props.item.link}
              alt={
                props.language === "RO"
                  ? props.item.title.ro
                  : props.item.title.en
              }
            />
            <div className="offcanvas-description">
              <p>
                This is a placeholder description for what is supposed to be a
                product description.
              </p>
              <div className="chip-container">
                <div className="d-flex flex-wrap">
                  {props.language === "RO"
                    ? props.item.description.ro.map((desc, index) => {
                        return (
                          <span
                            className="chip d-flex justify-content-center align-items-center"
                            key={index}
                          >
                            {desc}
                          </span>
                        );
                      })
                    : props.item.description.en.map((desc, index) => {
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

              <button className="btn-dark-green btn-long btn-padding">
                {props.language === "RO" ? "Comandă" : "Order"}
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Gallery;
