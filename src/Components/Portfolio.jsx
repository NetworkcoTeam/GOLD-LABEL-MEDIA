import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Portfolio() {
  const projects = [
    {
      title: 'RAMChemicals',
      description: 'Brand refresh · Label redesign · Socials with personality Ram Chemicals needed a little edge—and we brought it. We started by rebranding their entire look, redesigned all their packaging labels to be clean and modern, then took over their social media. Now their content is fresh, consistent, and actually connects with their audience (yes, even in the chemical space). It’s branding meets science, and it works.',
      image: ['CLM.png'],
    },
    {
      title: 'Takusani',
      description: ' At Takusani, we provide end-to-end marketing, social media, and administrative support to strengthen the companys brand prsence and operational efficiency. Our role included managing all social media platforms, from developing strategic content plans to creating high-quality graphic designs and photography that reflected the brands identity. We oversaw the companyd online prsence, conducted in-depth market research to inform targetd advertising campaigns.',
      image: ['TakuLogo.png'],  
    },
    {
      title: 'The NetworkCo',
      description: 'Insta-ready content · Full platform takeover · Scroll-stopping visuals Networkco trusted us with their digital voice and we ran with it. From Instagram to TikTok, Facebook to LinkedIn, we handled it all. We created content that wasn’t just pretty, but actually performed. Our team shot, styled, edited, and curated everything videos, photos, graphics to keep their platforms buzzing. Basically, we made them look good everywhere.',
      image: ['NetC.png'],
    },
    {
      title: 'Cailey Ann Services',
      description: 'Branding glow-up · Logo magic · Launch-ready market strategy Cailey Ann came to us ready to shake things up in the real estate training world and we were all in. We gave her brand a full makeover, designed a sleek new logo, and built a campaign strategy that actually made people want to sign up for training. With the right visuals and the right messaging, Cailey Ann brand now speaks directly to future agents who are ready to get licensed and get moving.',
      image: ['1.png'],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-amber-300 mb-4 sm:py-8">WELCOME TO OUR PORTFOLIO</h2>
        <p className="text-gray-300 text-lg">
          Below are the projects we have participated in:
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-10 px-6 bg-gradient-to-r from-black via-gray-800 to-gray-700"
      >
        <h3 className="text-3xl font-bold text-center text-amber-300 mb-10">PROJECTS</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 hover:bg-amber-100 border-2 border-amber-600 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center p-4"
            >
              {/* Image(s) */}
              <div className="flex justify-center items-center mb-4">
                {project.image.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${project.title} ${imgIndex + 1}`}
                    className="h-40 object-cover rounded-3xl"
                  />
                ))}
              </div>

              {/* Title & Description */}
              <h4 className="text-xl font-semibold text-amber-400 group-hover:text-gray-900 mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-gray-300 group-hover:text-gray-950">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-amber-300 mb-6">GET IN TOUCH</h3>
        <p className="mb-4 text-gray-400">Feel free to reach out for collaborations or just to say hi!</p>
        <a
          href="mailto:info@glmedia.co.za"
          className="bg-amber-500 text-black px-6 py-2 rounded hover:bg-amber-400 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;