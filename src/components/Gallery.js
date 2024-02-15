import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./Gallery.css";

const Gallery = () => {
  const [language, setLanguage] = useState("");
  const [itemInfo, setItemInfo] = useState([]);
  // type will be bouquets or baskets
  const [type, setType] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "flowers")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItemInfo(newData);
      console.log(newData);
    });
  };

  useEffect(() => {
    fetchPost();
    const data = localStorage.getItem("language");
    if (data) {
      setLanguage(data);
    }
  }, []);

  const changeType = (type) => {
    setType(type);
    const filtered = itemInfo.filter((item) => item.id === type);
    setFilteredItems(Object.values(filtered[0])[0]);
		console.log(filteredItems);
  };

  const passLanguage = (language) => {
    setLanguage(language);
    localStorage.setItem("language", language);
  };
  return (
    <div>
      <Title></Title>
      <Header sticky="top" passLanguage={passLanguage} />

      <button className="btn-dark-green" onClick={() => changeType("bouquets")}>
        {language === "RO" ? "Buchete" : "Bouquets"}
      </button>
      <button className="btn-dark-green" onClick={() => changeType("baskets")}>
        {language === "RO" ? "Coșuri" : "Baskets"}
      </button>

      <div className="gallery-container">
        {type !== "" && (
          <>
            <h2>{type === "bouquets" ? "Buchete" : "Coșuri"}</h2>
            {/* each filteredItems object has a image link, title string and description array */}
						{filteredItems.map((item, index) => {
							return (
								<div key={index} className="gallery-item">
									<img className="product-image" src={item.link} alt={item.title} />
									<h3>{item.title}</h3>
									<ul>
										{item.description.map((desc, index) => {
											return <li key={index}>{desc}</li>;
										})}
									</ul>
								</div>
							);
						})}
          </>
        )}
      </div>

      <Footer language={language} />
    </div>
  );
};

export default Gallery;
