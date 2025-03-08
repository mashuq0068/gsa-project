import SectionDivider from "@/components/ui/SectionDivider";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ onNewsletterSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onNewsletterSubmit) onNewsletterSubmit(formData);
    alert("Thank you for signing up for our newsletter!");
    setFormData({ firstName: "", lastName: "", email: "" });
  };

  return (
    <footer className="relative bg-gray-900  h-max text-white py-12 mt-12">
      <SectionDivider />
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm mb-4">
            Stay updated with our latest news and events.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
                className="w-1/2 p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-orange-400"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
                className="w-1/2 p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-orange-400"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring focus:ring-orange-400"
            />
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Navigation Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-orange-400 transition">
              Home
            </Link>
            <Link to="/about-us" className="text-orange-400 transition">
              About Us
            </Link>
            <Link to="/donate" className="text-orange-400 transition">
              Donate
            </Link>
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          <div className="flex justify-center gap-5 text-2xl">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gsa-us/"
              className="hover:text-orange-400 cursor-pointer transition"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/guineanssucceeding/?hl=en"
              className="hover:text-orange-400 cursor-pointer transition"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/people/Guineans-Succeeding-in-America/100064851991896/"
              className="hover:text-orange-400 cursor-pointer transition"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/gsa_us"
              className="hover:text-orange-400 cursor-pointer transition"
            >
              <FaTwitter />
            </a>
            <a
              
              href="mailto:gsa.us@gmail.com"
              className="hover:text-orange-400 cursor-pointer transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-800 pt-6 text-sm">
        <p>2024 © Guineans Succeeding in America • All rights reserved.</p>
        <p>
          The Guineans Succeeding in America is a 501(c)(3) nonprofit
          organization.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
