import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Linkedin, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";

const services = [
  {
    title: "Market Research",
    description: "In-depth analysis to understand market trends and consumer behaviour. We help you understand your customers, your competitors, and the market you’re in. Through surveys, interviews, and data analysis, we find out what people want, what’s trending, and what your business can do better. This helps you make smart decisions and create marketing strategies that actually work.",
    iframe: "https://lottie.host/embed/4d396114-30ed-48f3-a7d6-7c2f374cc1a5/yuFTKJPGVh.lottie",
  },
  {
    title: "Social Media Content Creation",
    description: "Design and production of engaging content for social media platforms. We create eye-catching and engaging content for your social media platforms. From photos and videos to graphics and captions, we make sure your brand looks good and speaks clearly to your audience. Our goal is to help you grow your online presence, connect with your followers, and keep them interested in what you offer.",
    iframe: "https://lottie.host/embed/76022b38-845a-4e78-8769-7c1b52171171/8HS65nGQCR.lottie",
  },
  {
    title: "Photography & Videography",
    description: "Professional photography  and high-quality video production services for events, products, and promotional materials. We offer professional photography  and videography that brings your brand, products, and events to life. Whether you need clean product shots, team photos, lifestyle images and videos, or event coverage, we capture high-quality visuals that tell your story and grab attention.",
    iframe: "https://lottie.host/embed/94ae6060-19f6-4269-ba4e-3b9879ba92ce/x32BEQu1yJ.lottie",
  },
  {
    title: "Market Strategy",
    description: "Development of comprehensive marketing plans tailored to client objectives. We help you plan how to reach the right people and grow your business. From setting goals to choosing the best marketing channels, we build a clear strategy that fits your brand and budget. Whether you’re just starting out or looking to improve, we guide you every step of the way.",
    iframe: "https://lottie.host/embed/68f2a7dd-4439-448f-ada0-46d0a5345017/1PMKyEi49H.lottie",
  },
  {
    title: "Graphic Design",
    description: "Graphic design is the art and practice of creating visual content to communicate ideas. We create professional, cisually appealing designs that help businesses and individuals to communicate their brand, ideas or messages effectively. this include logos, marketing materials, sovial media graphic and more.",
    iframe: "https://lottie.host/embed/6d18cc6c-8122-48b7-bd08-9ba230b75cb0/mT5RVNUZoq.lottie",
  },
   {
    title: "Social Media Management",
    description: "We design create visuals from logos to full brand identities that reflect your brand and help achieve your busuness goals.",
    iframe: "https://lottie.host/embed/6d18cc6c-8122-48b7-bd08-9ba230b75cb0/mT5RVNUZoq.lottie",
  },
];

const style = `
  .perspective {
    perspective: 1000px;
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  .iso-pro {
    transition: all 0.5s;
    position: relative;
  }
  .iso-pro:hover .social-svg {
    transform: translate(15px, -15px) scale(1.25);
    border-radius: 100%;
  }
  .iso-span {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    color: #1877f2;
    border: 1px solid #1877f2;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
                inset 0 0 5px rgba(255, 255, 255, 0.5),
                0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 24px;
    width: 24px;
  }
  .iso-pro:hover .iso-span {
    opacity: 1;
  }
  .iso-pro:hover .iso-span:nth-child(2) {
    opacity: 0.2;
  }
  .iso-pro:hover .iso-span:nth-child(3) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .iso-pro:hover .iso-span:nth-child(4) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
`;

function FlipCard({ title, description, iframe }) {
  return (
    <div className="group w-full min-h-[22rem] perspective">
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-gray-900 text-amber-800 rounded-2xl shadow-lg flex flex-col">
          <div className="w-full h-48 rounded-t-2xl overflow-hidden">
            <iframe
              src={iframe}
              className="w-full h-full"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
          <div className="p-2 flex-1 flex items-center justify-center">
            <h2 className="text-lg font-semibold text-amber-500 text-center italic">{title}</h2>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 text-white rounded-2xl shadow-lg flex flex-col justify-between p-4 overflow-hidden">
          <div className="overflow-y-auto pr-1">
            <h2 className="text-base font-semibold text-amber-400 text-center italic mb-2">{title}</h2>
            <p className="text-xs text-center leading-relaxed">{description}</p>
          </div>
          <Link to="/ContactUs" className="mt-4 px-4 py-1 bg-amber-500 text-black text-sm font-semibold rounded-lg hover:bg-amber-400 transition self-center block text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Service() {
  return (
    <>
      <style>{style}</style>
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="mt-12 text-4xl font-bold text-center text-amber-200 mb-12">OUR SERVICES</h1>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <FlipCard
                key={index}
                title={service.title}
                description={service.description}
                iframe={service.iframe}
              />
            ))}
          </div>
          <div className="mt-12 h-64 mx-auto p-6 rounded-2xl backdrop-blur-sm">
            <h1 className="font-semibold text-amber-500 mb-4 text-center text-2xl">SOCIAL MEDIA</h1>
            <div className="flex justify-center space-x-36">
              <div className="iso-pro">
                <a
                  href="https://www.linkedin.com/company/gold-label-media/"
                  className="text-white hover:text-amber-400 transition duration-300"
                >
                  <SlSocialLinkedin className="social-svg h-40 w-30 p-2 text-amber-200 hover:text-amber-600 fill-current" />
                  <span className="iso-span"></span>
                  <span className="iso-span"></span>
                  <span className="iso-span"></span>
                </a>
              </div>
              <div className="iso-pro">
                <a
                  href="https://www.instagram.com/goldlabelmedia_sa?igsh=M2YzZzViZmk4dHlo"
                  className="text-white hover:text-amber-400 transition duration-300"
                >
                  <IoLogoInstagram className="social-svg h-40 w-30 p-2 text-amber-200 hover:text-amber-600 fill-current" />
                  <span className="iso-span"></span>
                  <span className="iso-span"></span>
                  <span className="iso-span"></span>
                </a>
              </div>
              <div className="iso-pro">
                <a
                  href="https://www.tiktok.com/@gold.label.media?_t=ZS-8xWbBCiIRdw&_r=1"
                  className="text-white hover:text-amber-400 transition duration-300"
                >
                  <FaTiktok className="social-svg h-40 w-30 p-2 rounded-full text-amber-200 hover:text-amber-600 fill-current" />
                  <span className="iso-span"></span>
                  <span className="iso-span"></span>
                  <span className="iso-span"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}