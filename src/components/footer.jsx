import React from 'react';
import { SiWhatsapp, SiInstagram, SiFacebook } from 'react-icons/si';

const socialIcons = [
    { icon: <SiWhatsapp size={24} />, link: 'https://wa.me/918591131447', label: 'WhatsApp' },
    { icon: <SiInstagram size={24} />, link: 'https://www.instagram.com/stayatlas.in', label: 'Instagram' },
    { icon: <SiFacebook size={24} />, link: 'https://www.facebook.com/yourpage', label: 'Facebook' },
  ];

const Footer = () => {
    return (
      <footer className="bg-[#3d3c3c] text-white py-10 text-center w-full font-custom">
        <div className="container mx-auto w-[80%]">
            <h3 className="text-2xl mb-5 pb-2.5 border-b-2 border-white font-bold">
                For more Information
            </h3>
            <ul className="flex flex-wrap justify-center gap-4 my-5 md:flex-row flex-col">
                {[
                    { text: 'List your property', link: '../footer/html/list.html' },
                    { text: 'Stays', link: '#' },
                    { text: 'Customer Support', link: '../footer/html/chat.html' },
                    { text: 'About us', link: '../footer/html/aboutus.html' },
                    { text: 'Home', link: 'Home/Html/index.html' },
                    { text: 'Contact us', link: 'https://wa.me/918591131447' },
                ].map((item, index) => (
                    <li key={index} className="mx-4 md:my-0 my-2">
                    <a
                        href={item.link}
                        className="text-white font-bold hover:text-[#ffcc00] transition-colors duration-300"
                        target={item.link.startsWith('http') ? '_blank' : ''}
                        rel="noopener noreferrer"
                    >
                        {item.text}
                    </a>
                    </li>
                ))}
            </ul>
  
          <div className="mt-8">
            <h3 className="text-2xl mb-5 pb-2.5 border-b-2 border-white font-bold">
              Contact Information
            </h3>
            <p className="text-base">Address: Malad, Mumbai, 400097</p>
            <p className="text-base">Phone: +91 85911 31447</p>
            <p className="text-base">
              Email:{' '}
              <a
                href="mailto:stayatlasin@gmail.com"
                className="text-white hover:text-[#ffcc00] font-bold"
              >
                stayatlasin@gmail.com
              </a>
            </p>
            <div className="mt-8 flex justify-center gap-4 text-2xl">
                {socialIcons.map((social, index) => (
                    <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ffcc00] transition-colors duration-300"
                    aria-label={social.label}
                    >
                    {social.icon}
                    </a>
                ))}
            </div>
          </div>
  
          <div className="mt-8 text-base">
            <h3 className="text-2xl mb-5 pb-2.5 border-b-2 border-white">Policies</h3>
            <div className="flex flex-wrap justify-center">
              {[
                { text: 'Terms & Conditions', link: '../footer/html/term.html' },
                { text: 'Privacy Policy', link: '../footer/html/PrivacyPolicy.html' },
                { text: 'Cancellation Policy', link: '../footer/html/Cancellation Policy.html' },
              ].map((policy, index) => (
                <a
                  key={index}
                  href={policy.link}
                  className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                >
                  {policy.text} 
                  <span className='px-4'>{ (index!==2) ? "|" : ""}</span>
                </a>
              ))}
            </div>
          </div>
  
          <div className="mt-8 italic max-w-5xl mx-auto leading-relaxed">
                <p>
                    "Whether you want a quaint abode among the woods, a luxurious stay, or a homely vibe for your vacations - we, at Stayatlas & Experiences, strive to provide the best, striking the right balance between luxury and homely convenience."
                </p>
          </div>
  
          <div className="mt-5 pt-4 border-t border-white/10 text-sm">
            <p>&copy; {new Date().getFullYear()} Stayatlas | All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;