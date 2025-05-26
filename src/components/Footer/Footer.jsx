import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
          {/* Brand Info Section */}
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell></FaDumbbell>
              <p>Gym</p>
              <p className="text-secondary">Zone</p>
            </div>
            <p>
              Coders Gym hadir memberikan pengalaman kebugaran terbaik dengan
              fasilitas modern dan atmosfer yang inspiratif.
            </p>
            <div className="flex items-center justify-start gap-5 !mt-6">
              <a href="#" className="hover:text-secondary">
                <HiLocationMarker className="text-3xl" />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Company Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Yoga
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Muscles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    {" "}
                    Fitness
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8">
          <div className="text-center py-6 border-t-2 border-grey-300/10">
            <span className="text-sm text-gray-300 opacity-50">
              @Copyright 2024 The Gym Zone
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
