"use client";
import React from "react";
import { useState } from "react";

function AiOutlineClose(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
    </svg>
  );
}

function AiOutlineMenu(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
    </svg>
  );
}

function ImQuotesLeft(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z" /></svg>;
}

function BsPeopleCircle(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" /><path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /><path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd" /></svg>;
}

import Image from "next/image";
import Hero from "public/Hero.png";
import Tesla from "public/Tesla.png";

export default function Home() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <main className="min-h-screen w-full">
      <div className="hero min-h-screen bg-cover">
        <nav className="text-white p-16 flex justify-between">
          <p className="font-semibold text-3xl">BuyCar</p>
          <ul className="flex gap-8 items-center">
            <li className="gap-8 items-center hidden md:flex">
              <p className="hover:cursor-pointer">Home</p>
              <p className="hover:cursor-pointer">Collections</p>
              <p className="hover:cursor-pointer">Compare</p>
              <p className="hover:cursor-pointer">Blog</p>
              <p className="hover:cursor-pointer">About Us</p>
            </li>
            <div onClick={handleNav} className="block md:hidden">
              {!nav ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </div>
          </ul>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 w-[70%] border-r border-r-gray-800 h-full bg-[#000300] ease-in-out duration-200"
                : "fixed left-[-100%]"
            }
          >
            <ul className="p-14">
              <h1 className="text-2xl font-semibold flex justify-center">BuyCar</h1>
              <p className="pt-4 border-b border-gray-400">Home</p>
              <p className="pt-4 border-b border-gray-400">Collections</p>
              <p className="pt-4 border-b border-gray-400">Compare</p>
              <p className="pt-4 border-b border-gray-400">Blog</p>
              <p className="pt-4">About Us</p>
            </ul>
          </div>
        </nav>
        <section className="p-16">
          <h1 className="md:text-6xl text-white max-w-4xl text-3xl ">
            Find Your Dream Car Today: Explore Our Wide Selection of Vehicles
          </h1>
          <p className="text-white my-[20px] text-lg md:2xl">
            Find your dream car with us. Wide selection, easy browsing, and
            expert help. Start now!
          </p>
          <label htmlFor="text" className="w-64">
            <input
              className="outline-none px-4 w-[365px] h-[48px] rounded-3xl text-gray-500"
              type="text"
              placeholder="Find dream car"
            />
          </label>
        </section>
      </div>
      <section className="second h-full w-full bg-[#2A2B2E] items-center">
        <div className="p-16 text-white">
          <div className="flex min-h-max justify-evenly max-md:flex-col max-md:gap-8 gap-8">
            <h1 className="text-4xl max-w-lg md:xl leading-normal max-md:text-3xl">Experience the Benefits of Buying Your Next Car with <span className="text-red-600">BuyCar</span></h1>
            <div className="p-[16px] text-md w-80 h-36 bg-[#292e3f] rounded-xl">
              <h2 className="text-lg">Quality assurance</h2>
              <p className="text-sm mt-2 text-[#9FA1A3]">We offer only the best vehicles that have been thoroughly inspected to ensure their quality and performance.</p>
            </div>
            <div className="p-[16px] text-md w-80 h-36 bg-[#292e3f] rounded-xl">
              <h2 className="text-lg">Wide Selection</h2>
              <p className="text-sm mt-2 text-[#9FA1A3]">BuyCar features a diverse range of cars that cater to all budgets and preferences.</p>
            </div>
          </div>
          <div className="flex mt-4 gap-12 max-md:flex-col max-md:mt-8 justify-center">
            <div className="p-[14px] text-md w-80 h-36 max-md:h-40 bg-[#43454E] rounded-xl">
                <h2 className="text-lg">Competitive Pricing</h2>
                <p className="text-sm mt-2 text-[#9FA1A3]">We offer competitive prices and transparent pricing so that you can be sure you're getting a great deal.</p>
              </div>
              <div className="p-[16px] text-md w-80 h-36 bg-[#43454E] rounded-xl">
                <h2 className="text-lg">Flexible Financing</h2>
                <p className="text-sm mt-2 text-[#9FA1A3]">We offer flexible financing options to help you purchase your dream car within your budget.</p>
              </div>
              <div className="p-[16px] text-md w-80 h-36 bg-[#43454E] rounded-xl max-md:h-max">
                <h2 className="text-lg">Expert Guidance</h2>
                <p className="text-sm mt-2 text-[#9FA1A3]">Our team of experts is always available to guide you through the process and answer any questions you may have.</p>
              </div>
              <div className="p-[16px] text-md w-80 h-36 bg-[#43454E] rounded-xl">
                <h2 className="text-lg">Good Customer Service</h2>
                <p className="text-sm mt-2 text-[#9FA1A3]">We prioritize customer satisfaction and strive to provide exceptional service throughout your journey.</p>
              </div>
          </div>
        </div>
      </section>
      <section className="contact min-h-screen bg-[#2A2B2E] bg-cover p-16 flex items-center">
        <div className="border border-1 border-white h-80 max-sm:h-96 w-full rounded-xl py-7 px-8 text-white flex flex-col items-center">
            <h3 className="text-center text-5xl max-md:text-4xl">Get In Touch With Us</h3>
            <p className="text-center mt-8">We look forward to hearing from you and assisting you with all of your car buying needs!</p>
            <button className="bg-[#DF2935] w-32 h-12 rounded-xl mt-16 hover:cursor-pointer">Contact Us</button>
        </div>
      </section>
      <section className="footer bg-[#2A2B2E] h-80 pt-16 px-24 flex justify-between max-md:flex-col max-md:h-full max-md:gap-8">
        <div>
          <h3 className="text-white text-2xl mb-12">BuyCar</h3>
          <p className="text-[#9FA1A3] w-72">BuyCar is a leading online platform for buying and selling cars. </p>
        </div>
        <div>
          <h4 className="text-white text-xl mb-4">Navigation</h4>
          <p className="text-[#9FA1A3] mb-2">Home</p>
          <p className="text-[#9FA1A3] mb-2">Collections</p>
          <p className="text-[#9FA1A3] mb-2">Compare</p>
          <p className="text-[#9FA1A3] mb-2">Blog</p>
          <p className="text-[#9FA1A3] mb-2">About Us</p>
        </div>
        <div>
          <h4 className="text-white text-xl mb-4">Support Us</h4>
          <p className="text-[#9FA1A3] mb-2">Contact Us</p>
          <p className="text-[#9FA1A3] mb-2">Support Center</p>
          <p className="text-[#9FA1A3] mb-2">Security</p>
        </div>
        <div>
          <h4 className="text-white text-xl mb-4">Partner</h4>
          <p className="text-[#9FA1A3] mb-2">Our Partner</p>
          <p className="text-[#9FA1A3] mb-2">Community</p>
          <p className="text-[#9FA1A3] mb-2">Customers</p>
        </div>
      </section>
    </main>
  );
}