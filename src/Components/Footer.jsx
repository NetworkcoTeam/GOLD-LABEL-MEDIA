import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import emailjs from "emailjs-com"; // ✅ Import EmailJS

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
  e.preventDefault();

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  setLoading(true);

  const templateParams = {
    to_name: "Global Media Label",
    from_email: email,
    message: "Newsletter subscription request",
  };

  emailjs
    .send(
      "service_ncn14ud",   // Replace with your EmailJS Service ID
      "template_l80919m",  // Replace with your EmailJS Template ID
      templateParams,
      "MWDMMwyq9jxWNhoNJ"    // Replace with your EmailJS Public Key
    )
    .then(
      () => {
        alert("Thank you for subscribing!");
        setEmail("");
        setLoading(false);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong.");
        setLoading(false);
      }
    );
};

  return (
    <footer className="bg-gradient-to-br from-black via-gray-800 to-gray-700 border-amber-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="bg- backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-black transition-transform duration-300 hover:scale-105 border-2 border-yellow-600 ">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['HomePage', 'About', 'ContactUs', 'Portfolio', 'Service'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-white hover:text-amber-400 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-black transition-transform duration-300 hover:scale-105 border-2 border-yellow-600">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <div className="hidden lg:block">
              <ul className="space-y-2 text-white">
                <li>Email: info@glmedia.co.za</li>
                <li>Phone: +27 83 276 7446</li>
              </ul>
            </div>
            <div className="lg:hidden flex space-x-4">
              <a href="mailto:info@glmedia.co.za" className="text-white hover:text-amber-400 transition duration-300">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+27 83 276 7446" className="text-white hover:text-amber-400 transition duration-300">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-black transition-transform duration-300 hover:scale-105 border-2 border-yellow-600">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/gold-label-media/" className="text-white hover:text-amber-400 transition duration-300 transform hover:scale-125">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/goldlabelmedia_sa?igsh=M2YzZzViZmk4dHlo" className="text-white hover:text-amber-400 transition duration-300 transform hover:scale-125">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@gold.label.media?_t=ZS-8xWbBCiIRdw&_r=1" className="text-white hover:text-amber-400 transition duration-300 transform hover:scale-125">
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-black transition-transform duration-300 hover:scale-105 border-2 border-yellow-600">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Newsletter</h3>
            <p className="text-white mb-4">Subscribe for updates on our projects</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-white border-yellow-600 border-2 placeholder:text-white focus:ring-pink-500 focus:border-pink-500 p-2 rounded"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-500 hover:bg-amber-700 text-[hsl(190,60%,90%)] transition duration-300 rounded-2xl px-4"
              >
                {loading ? "Sending..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-pink-950 text-center text-[hsl(190,60%,90%)]">
          <p>© {new Date().getFullYear()} Gold Label Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
