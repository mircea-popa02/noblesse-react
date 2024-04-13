import React, { useState } from "react";
import "./Whatsapp.css";
import { Button, Form } from "react-bootstrap";

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
    window.open(whatsappLink, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className="whatsapp-wrapper"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleMessageBox}
          style={{ cursor: "pointer", background: "none", border: "none" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="whatsapp"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>

      {isOpen && (
        <div
          id="message-box"
          style={{
            position: "fixed",
            bottom: "70px",
            right: "10px",
            display: "flex",
            flexDirection: "column",
            width: "300px",
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            animation: isOpen
              ? "slideIn 0.2s forwards"
              : "slideOut 0.2s forwards",
          }}
        >
          <div
            className="whatsapp-header"
            style={{
              height: "48px",
              backgroundColor: "#075e54",
              color: "white",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              padding: "8px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="whatsapp-header-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <strong>{language === "RO" ? "Asistență" : "Support"}</strong>
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
                'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
            }}
          >
            <div
              className="text-box-mock"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                margin: "16px",
                padding: "4px",
                maxWidth: "200px",
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
                  marginBottom: "12px",
                }}
              >
                {language === "RO"
                  ? "Bună! Cum te putem ajuta?"
                  : "Hello! How can we help you?"}
              </p>
              <small
                id="last-seen"
                style={{
                  fontSize: "10px",
                  color: "#8d8d8d",
                  padding: "8px",
                  margin: "0",
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
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                language === "RO" ? "Scrie un mesaj..." : "Type a message..."
              }
              style={{
                border: "none",
                padding: "8px",
                resize: "none",
                flexGrow: 1,
              }}
            ></textarea>
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
