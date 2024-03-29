"use client";
import React, { useState } from "react"; // Import useState
import db from "../../firebase"; // Import the database reference
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = {
      ...formData,
      createdAt: serverTimestamp(), // Add createdAt field with serverTimestamp
    };
    try {
      await addDoc(collection(db, "contacts"), submission);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", project: "" });
    } catch (error) {
      console.error("Error writing document: ", error);
      alert("Error sending message. Please try again.");
    }
  };
  return (
    <div id="contact" className="mb-32">
      <div className="text-3xl font-arialBlack text-center mt-32 mb-6">
        <h1>Contact Us</h1>
      </div>
      <div className=" contact-form-container opacity-90">
        <form className="contact-form " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email*"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Tell us about your project"
            name="project"
            required
            value={formData.project}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="send-button">
            SEND
          </button>
        </form>

        <div className="contact-form-footer">
          <p>Questions or Comments?</p>
          <p>
            We want to hear about your next big idea. Send us a message, and we will get
            back to you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
