import React, { useState } from "react";
import "./contactus.css"; // Link to your custom CSS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Bharti Eye Foundation!");
    console.log(formData);
    // Add backend logic (e.g., fetch/axios) here if needed
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className='ContactUs'>
      <h1>Contact Us</h1>
      <hr />
      <div className='contact-container'>
        <h2>Write to us</h2>
        <form onSubmit={handleSubmit} className='contact-form'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            rows='5'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
