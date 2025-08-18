import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // ✅ Import Footer

function About() {
  const [hoveredTeamId, setHoveredTeamId] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Nicole F.",
      role: "Creative Director",
      desc: "Leads the creative vision for campaigns, oversees design and content teams, and ensures brand consistency across all visual and messaging outputs.",
      img: "NicoleF.jpg",
    },
    {
      id: 2,
      name: "Gabby",
      role: "Graphic Design",
      desc: "We design creative visuals—from logos to full brand identities—that reflect your brand and help achieve your business goals.",
      img: "Gabby.jpg",
    },
    {
      id: 3,
      name: "Nicole M.",
      role: "Marketing Researcher ",
      desc: "Gathers and analyzes market data to identify trends, customer needs, and competitive insights that guide marketing strategies.",
      img: "NicoleM.jpg",
    },
    {
      id: 4,
      name: "Dembe",
      role: "Marketing Coordinator ",
      desc: "Assists in planning and executing marketing campaigns, manages schedules, and coordinates between teams to ensure projects run smoothly.",
      img: "Dembe.jpg",
    },
  ];

  return (
    <>
      {/* Navbar always on top */}
      <Navbar />

      {/* About Section */}
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        {/* Left - Text */}
        <div className="md:w-1/2 w-full md:pr-12">
          <h2 className="text-4xl font-bold mb-6 mt-12 text-amber-200">ABOUT US</h2>
          <p className="text-lg leading-relaxed">
            At
            <span className="text-amber-500 font-semibold"> GOLD LABEL MEDIA</span>, we are a results-driven marketing agency dedicated to helping businesses grow through strategic, creative, and insight-driven marketing.
            <br /><br />
            From social media magic to full-blown brand makeovers, we help businesses (big and small) find their voices, grow their audience, and stand out.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12 text-amber-200">MISSION</h2>
          <p className="text-lg leading-relaxed">
            We exist to redefine creativity in the digital space by delivering premium, research-based marketing solutions that merge social impact with luxury content.
            <br /><br />
            From community-centered campaigns to high-impact commercial work, we perform — not just post.
          </p>
        </div>

      {/* Right - Animation */}
<div className="md:w-1/2 w-full flex justify-center mt-12 md:mt-0">
  <iframe
    src="https://lottie.host/embed/77138eb2-581b-467c-b127-b96cc386c8f3/f9ODzQ5374.lottie"
    className="w-full h-96 rounded-xl shadow-lg "
    allowFullScreen
    title="About Us Animation"
  ></iframe>
</div>

      </div>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-black via-gray-800 to-gray-700 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-amber-200">OUR VALUES</h2>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "INNOVATION", text: "We value bold ideas and future-thinking in our content and strategy." },
              { title: "CREATIVITY", text: "We pride ourselves on visual storytelling that is elevated and artistic." },
              { title: "INTEGRITY", text: "We maintain transparency and excellence in every deliverable." },
            ].map((value, index) => (
              <div
                key={index}
                className="w-full sm:w-[280px] bg-gray-900 rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out text-center"
              >
                <h3 className="text-xl font-semibold text-amber-600 mb-3">{value.title}</h3>
                <p className="text-white">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-r from-black via-gray-800 to-gray-700 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-200 mb-12">MEET THE TEAM</h2>

          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map(({ id, name, role, desc, img }) => {
              const isHovered = hoveredTeamId === id;
              const isOtherHovered = hoveredTeamId !== null && !isHovered;

              return (
                <div
                  key={id}
                  onMouseEnter={() => setHoveredTeamId(id)}
                  onMouseLeave={() => setHoveredTeamId(null)}
                  className={`w-full sm:w-64 bg-gray-900 rounded-xl p-6 transition-all duration-300 border-amber-500 border-2 text-center cursor-pointer
                    ${isHovered ? "scale-110 shadow-2xl" : ""}
                    ${isOtherHovered ? "blur-sm scale-90" : ""}
                  `}
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-amber-500">{name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{role}</p>
                  <p className="text-white text-sm">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </>
  );
}

export default About;
