import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would submit this data to a backend service
    console.log("Form submitted:", formData);
    alert("Message envoyé! (Simulé)");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:20px_20px]"></div>
      
      {/* Technical blueprint lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10"></div>
      <div className="absolute top-0 right-0 w-[1px] h-full bg-black/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10"></div>
      <div className="absolute top-0 left-0 w-[1px] h-full bg-black/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[1px] w-12 bg-yellow-500"></div>
              <h2 className="font-mono uppercase tracking-widest text-sm text-black/70">Contact</h2>
            </div>
            <h3 className="text-4xl font-bold tracking-tight mb-2">Parlons de Votre Projet</h3>
            <p className="text-black/70 max-w-2xl">
              Vous avez un projet en robotique ou une question technique? N'hésitez pas à me contacter
              pour discuter de vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className={`transition-all duration-1000 delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative border border-black/20 focus-within:border-yellow-500 transition-colors">
                  {/* Technical corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute top-0 right-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-yellow-500"></div>
                  
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NOM"
                    required
                    className="w-full px-4 py-3 bg-transparent outline-none font-mono text-sm placeholder:text-black/50"
                  />
                </div>
                
                <div className="relative border border-black/20 focus-within:border-yellow-500 transition-colors">
                  {/* Technical corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute top-0 right-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-yellow-500"></div>
                  
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    required
                    className="w-full px-4 py-3 bg-transparent outline-none font-mono text-sm placeholder:text-black/50"
                  />
                </div>
                
                <div className="relative border border-black/20 focus-within:border-yellow-500 transition-colors">
                  {/* Technical corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute top-0 right-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-yellow-500"></div>
                  
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="MESSAGE"
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-transparent outline-none font-mono text-sm placeholder:text-black/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="border border-black/30 bg-transparent hover:bg-yellow-500 hover:border-yellow-500 text-black font-mono tracking-wider px-8 py-3 transition-colors text-sm uppercase flex items-center gap-2"
                >
                  <span>Envoyer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </form>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8">
                <h4 className="font-mono text-lg font-bold mb-4">COORDONNÉES</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/10 p-2 rounded-sm mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-mono text-sm font-medium">EMAIL</h5>
                      <a href="mailto:contact@paulbourgois.com" className="text-black/70 hover:text-yellow-500 transition-colors">contact@paulbourgois.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/10 p-2 rounded-sm mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-mono text-sm font-medium">TÉLÉPHONE</h5>
                      <a href="tel:+33600000000" className="text-black/70 hover:text-yellow-500 transition-colors">+33 6 00 00 00 00</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/10 p-2 rounded-sm mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-mono text-sm font-medium">LOCALISATION</h5>
                      <p className="text-black/70">Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-mono text-lg font-bold mb-4">RÉSEAUX SOCIAUX</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/paulbourgois" target="_blank" rel="noopener noreferrer" className="bg-black/5 hover:bg-yellow-500/20 p-3 transition-colors rounded-sm">
                    <svg width="20" height="20" fill="currentColor" className="text-black" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23c.957-.266 1.983-.399 3.003-.404c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576c4.765-1.589 8.199-6.086 8.199-11.386c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/paulbourgois" target="_blank" rel="noopener noreferrer" className="bg-black/5 hover:bg-yellow-500/20 p-3 transition-colors rounded-sm">
                    <svg width="20" height="20" fill="currentColor" className="text-black" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/paulbourgois" target="_blank" rel="noopener noreferrer" className="bg-black/5 hover:bg-yellow-500/20 p-3 transition-colors rounded-sm">
                    <svg width="20" height="20" fill="currentColor" className="text-black" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
