import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showForm = () => setIsVisible(true);
  const hideForm = () => setIsVisible(false);

  return (
    <>
      <button className="btn-show-form" onClick={showForm}>
        Show contact form
      </button>

      {isVisible && (
        <div className="form-popup">
          <div className="form-popup-content">
            <button className="btn-close-form" onClick={hideForm}>
              ×
            </button>
            <h5>Contact us</h5>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send message
              </button>
            </form>
            <p>
              <a href="mailto:info@company.com">info@company.com</a>
            </p>
            <p>
              <a href="tel:212-456-7890">212-456-7890</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
