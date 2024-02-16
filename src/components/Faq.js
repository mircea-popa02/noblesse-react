import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

function Faq(props) {
  return (
    <div className="faq-wrapper" id="faq">
      <div className="faq-container">
        <h2>
          {props.language === "RO"
            ? "Întrebări frecvente"
            : "Frequently asked questions"}
        </h2>
        <div className="line"></div>
        <p>
          {props.language === "RO"
            ? "Dacă ai întrebări, citește răspunsurile la cele mai frecvente întrebări. Dacă nu găsești răspunsul la întrebarea ta, nu ezita să ne contactezi."
            : "If you have questions, read the answers to the most frequently asked questions. If you don't find the answer to your question, don't hesitate to contact us."}
        </p>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {props.language === "RO" ? "Ce produse oferiți?" : "What products do you offer?"}
            </Accordion.Header>
            <Accordion.Body>
              {props.language === "RO"
                ? "Produsele noastre sunt flori și aranjamente florale. Avem o gamă variată de flori și aranjamente pentru orice ocazie."
                : "Our products are flowers and floral arrangements. We have a wide range of flowers and arrangements for any occasion."}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {props.language === "RO" ? "De ce să aleg florăria Noblesse?" : "Why choose Noblesse florist?"}
            </Accordion.Header>
            <Accordion.Body>
              {props.language === "RO"
                ? "Suntem o florărie cu experiență, care oferă produse de calitate și servicii de livrare rapide. Avem o echipă de specialiști în aranjamente florale și flori de calitate."
                : "We are an experienced florist that offers quality products and fast delivery services. We have a team of specialists in floral arrangements and quality flowers."}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {props.language === "RO" ? "Care sunt metodele de plată?" : "What are the payment methods?"}
            </Accordion.Header>
            <Accordion.Body>
              {props.language === "RO"
                ? "Acceptăm plata cu cardul, plata ramburs și plata prin transfer bancar."
                : "We accept payment by card, cash on delivery, and bank transfer."}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
