import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    type: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ncn14ud', // Your Service ID
        'template_iqrfeqs', // Your Template ID
        {
          to_name: "dembem@glmedia.co.za", // Replace with recipient name if needed
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.number,
          purpose: formData.type, // matches {{purpose}}
          subject: formData.subject,
          message: formData.message,
        },
        'MWDMMwyq9jxWNhoNJ' // Your Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            number: '',
            type: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-amber-200 mb-12 mt-10">CONTACT US</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col space-y-6 justify-center">
            <h2 className="text-2xl font-semibold text-amber-300 italic">GET IN TOUCH</h2>
            <p className="text-amber-600">We’d love to hear from you. Drop us a line and we’ll get back to you shortly.</p>
            <p className="text-sm text-amber-600">1 asparagus street, halfway house</p>
            <p className="text-sm text-amber-600">Phone: +27 83 276 7446</p>
            <p className="text-sm text-amber-600">Email: info@glmedia.co.za</p>
            <iframe
              src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3999.7004613787294!2d28.11587512119798!3d-25.99947361302395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e03321dfeed%3A0xfbcf71c416a7003f!2s1%20Asparagus%20Rd%2C%20Halfway%20Gardens%2C%20Midrand%2C%201686!5e0!3m2!1sen!2sza!4v1750929473853!5m2!1sen!2sza"
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-xl border-2 border-gray-600"
              title="Forge Academy Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 bg-gray-900 rounded-xl shadow-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white"
            />
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white"
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white"
            >
              <option value="">Select Purpose</option>
              <option value="Market Research">Market Research</option>
              <option value="Socail Media Content Creation">Socail Media Content Creation</option>
              <option value="Photography">Photography</option>
              <option value="Market Strategy">Market Strategy</option>
              <option value="Videography">Videography</option>
            </select>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white min-h-[100px]"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-amber-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-amber-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
