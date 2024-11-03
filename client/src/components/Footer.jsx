import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between gap-y-10 gap-x-8 flex-col sm:flex-row">
          <div>
            <a
              className="text-xl sm:text-2xl font-[800] text-white flex items-center gap-2 sm:gap-4 mb-3"
              href="/"
            >
              FASHION
            </a>
            <p className="text-base font-normal text-footer">Complete your style with awesome clothes from us.</p>

            <div className="mt-4 sm:mt-8 flex items-center gap-4">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl text-footer cursor-pointer" />
                <FontAwesomeIcon icon={faInstagram} className="text-2xl text-footer cursor-pointer" />
                <FontAwesomeIcon icon={faTwitter} className="text-2xl text-footer cursor-pointer" />
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-footer cursor-pointer" />
            </div>
          </div>

          <div>
            <h6 className="text-md text-white font-medium uppercase mb-4">Company</h6>
            <ul>
              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink to="/about" className="text-base text-footer font-normal">About</NavLink>
              </li>
              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink to="/contact" className="text-base text-footer font-normal">Contact Us</NavLink>
              </li>

              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink to="#" className="text-base text-footer font-normal">Support</NavLink>
              </li>
              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink to="#" className="text-base text-footer font-normal">Careers</NavLink>
              </li>
            </ul>
          </div>

          <div>
          <h6 className="text-md text-white font-medium uppercase mb-4">Quick Links</h6>
            <ul>
              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink className="text-base text-footer font-normal">Share Location</NavLink>
              </li>
              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink className="text-base text-footer font-normal">Orders Tracking</NavLink>
              </li>

              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink className="text-base text-footer font-normal">Size Guide</NavLink>
              </li>
              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink className="text-base text-footer font-normal">FAQs</NavLink>
              </li>
            </ul>
          </div>

          <div>
          <h6 className="text-md text-white font-medium uppercase mb-4">Legal</h6>
            <ul>
              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink className="text-base text-footer font-normal">Terms & Conditions</NavLink>
              </li>
              <li className="mb-3 hover:translate-x-2 transition ease-in-out cursor-pointer">
                <NavLink className="text-base text-footer font-normal">Privacy Policy</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
