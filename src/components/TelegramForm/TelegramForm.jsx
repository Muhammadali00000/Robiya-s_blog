import React, { useState, useEffect } from "react";
import "./TelegramForm.scss";

function TelegramForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(""); 
  const [thanksMessage, setThanksMessage] = useState("");

  useEffect(() => {
    // AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = "7557668304:AAGp96mtGPFrr-vfnMNT9JV7YO2JvvVvzdw"; 
    const chat_id = "1572761471"; 
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const fullMessage = `👤 Name: ${name}\n📞 Phone: ${phone}\n💬 Message: ${message}`;

    const data = {
      chat_id: chat_id,
      text: fullMessage,
    };
    
    console.log("Sending data:", JSON.stringify(data));

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setThanksMessage("Скоро мы с вами свяжемся!");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          alert("Error sending message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message.");
      });
  };

  

  return (
    <section className="excurs">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="telegram-form">
          <label className="form-label">
            <input
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+998 (99) 999 99 99"
            />
          </label>
          <br />
          <label className="form-label">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input"
              placeholder="Your Message"
            />
          </label>
          <br />
          <button type="submit" className="form-button">
            SEND
          </button>
          {thanksMessage && (
            <p id="thanks" className="thanks-message">
              {thanksMessage}
            </p>
          )}
        </form>
      </div>

     
      <div className="image-container">
        <img src="/Element.png" alt="Contact Us" className="contact-image" />
      </div>
    </section>
  );
}

export default TelegramForm;
