import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.modular.css";
import contactgif from '../../assets/contactUs.gif'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS service ID, template ID, and user ID
    const serviceID = "service_77wo1zi";
    const templateID = "template_3ipbeh3";
    const userID = "rH5cAAyOxMYQ62XXM";

    // Use EmailJS to send the email
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log(
          "Message Sent Successfully!",
          response.status,
          response.text
        );
        setIsSent(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send message.", err);
      });
  };

  return (
    <>
      <div className="contact-section">
        <div>
            <img width={300} src={contactgif} alt="" />
        </div>
        <div className="form-div">
          <h2>Contact Me</h2>
          {isSent && <p>Your message has been sent successfully!</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-name">
              <label>Name</label><br/>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-email">
              <label>Email</label><br/>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-message">
              <label>Message</label><br/>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
