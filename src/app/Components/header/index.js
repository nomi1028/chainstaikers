"use client"
import Image from "next/image";
import React, { useState } from "react";


const Header = () => {
 
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="py-4 bg-white" x-data="{ expanded: false }">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
            <Image
              src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" 
              alt="Vercel Logo"
              className="dark:invert"
              width={150}
              height={40}
              priority
            />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button type="button" className="text-gray-900" onClick={toggleExpanded} aria-expanded={expanded}>
              <span className={expanded ? "hidden" : "block"} aria-hidden="true">
                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>

              <span className={expanded ? "block" : "hidden"} aria-hidden="true">
                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">
            <a
              href="#home"
              title=""
              class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#price"
              title=""
              class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Pricing{" "}
            </a>
            <a
              href="#aboutus"
              title=""
              class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              About us{" "}
            </a>

            <a
              href="#faq"
              title=""
              class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Faq{" "}
            </a>

            <a
              href="#contactus"
              title=""
              class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Contact us{" "}
            </a>
          </nav>

          <div class="hidden lg:flex lg:items-center lg:space-x-10">
                    <a href="#" title="" class="text-base font-medium text-black"> Sign up </a>

                    <a href="#" title="" class="text-base font-medium text-black"> Sign in </a>

                    <a href="#" title="" class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                </div>
        </div>

        <nav className={expanded ? "block" : "hidden"} x-collapse>
          <div className="px-1 py-8">
            <div className="grid gap-y-7">
              <a
                href="#home"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Home{" "}
              </a>
              <a
                href="#price"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Pricing{" "}
              </a>
              <a
                href="#aboutus"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                About us{" "}
              </a>

              <a
                href="#faq"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Faq{" "}
              </a>

              <a
                href="#contactus"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Contact us{" "}
              </a>
              <a
                // onClick={() => navigate("/signin")}
                title=""
                class="
        inline-flex
        items-center
        justify-center
        px-5
        py-2
        text-base
        font-semibold
        leading-7
        text-gray-900
        transition-all
        duration-200
        bg-transparent
        border border-gray-900
        rounded-xl
        font-pj
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
        hover:bg-gray-900 hover:text-white
        focus:bg-gray-900 focus:text-white
    "
                role="button"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
