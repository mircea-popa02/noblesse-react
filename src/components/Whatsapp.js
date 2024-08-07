import React, { useState } from "react";
import "./Whatsapp.css";
import { Button } from "react-bootstrap";
import { Form, TextArea } from "semantic-ui-react";

const Whatsapp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const language = props.language;

  const toggleMessageBox = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 50);
    } else {
      updateLastSeen();
      setIsOpen(true);
    }
  };

  const updateLastSeen = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setLastSeen(`${hours}:${minutes}`);
  };

  const sendMessage = () => {
    const whatsappNumber = "40761332100";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink);
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className="whatsapp-wrapper"
        style={{
          position: "fixed",
          bottom: "8px",
          right: "8px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleMessageBox}
          style={{ cursor: "pointer", background: "none", border: "none" }}
        >
          <img
            src="/whatsapp.svg"
            alt="whatsapp"
            style={{ width: "48px", height: "48px" }}
          />
        </button>
      </div>

      {isOpen && (
        <div
          id="message-box"
          style={{
            position: "fixed",
            bottom: "70px",
            right: "8px",
            display: "flex",
            flexDirection: "column",
            width: "20rem",
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0px 0px 18px rgba(44, 47, 37, 0.136)",
            zIndex: 1000,
            animation: isOpen
              ? "slideIn 0.2s forwards"
              : "slideOut 0.2s forwards",
          }}
        >
          <div
            className="whatsapp-header"
            style={{
              backgroundColor: "#075e54",
              color: "white",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="whatsapp-header-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <strong>
                {language === "RO"
                  ? "Florăria Noblesse"
                  : "Noblesse Flower Shop"}
              </strong>
              <small style={{ fontSize: "10px" }}>Online</small>
            </div>
            <button
              onClick={toggleMessageBox}
              style={{
                border: "none",
                width: "24px",
                height: "24px",
                background: "none",
                color: "#25d36557",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
          <div
            className="chat-mock-container"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage:
                'url("whatsapp-bg.png")',
            }}
          >
            <div
              className="text-box-mock"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                margin: "16px",
                padding: "2px",
                maxWidth: "12rem",
                color: "white",
                width: "fit-content",
                borderTopLeftRadius: "0",
                position: "relative",
              }}
            >
              <p
                style={{
                  color: "rgb(0, 0, 0)",
                  padding: "8px",
                  margin: "0",
                  marginBottom: "16px",
                }}
              >
                {language === "RO"
                  ? "Bună! Cum te putem ajuta?"
                  : "Hello! How can we help you?"}
              </p>
              <small
                id="last-seen"
                style={{
                  color: "#8d8d8d",
                  margin: "0",
                  paddingRight: "8px",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              >
                {lastSeen}
              </small>
            </div>
          </div>
          <div
            className="send-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              alignItems: "center",
            }}
          >
            <Form className="d-flex">
              <Form.Field
                id="form-input-control-message"
                control={TextArea}
                name="message"
                placeholder={
                  language === "RO" ? "Scrie un mesaj..." : "Type a message..."
                }
                onChange={(e) => setMessage(e.target.value)} // Set the onChange handler
                style={{
                  border: "none",
                  resize: "none",
                  height: "48px",
                }}
                required
              />
            </Form>
            <Button onClick={sendMessage} className="btn-green-whatsapp">
              {language === "RO" ? "Trimite" : "Send"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Whatsapp;
