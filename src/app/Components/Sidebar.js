"use client"

import React, { useState } from "react";
import Link from 'next/link'

const Sidebar = () => {

  const [navTitle, setNavTitle] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div>
      <div className="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-gray-900">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-alt.svg" alt="" />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-8">
            <div className="space-y-4">
              <nav className="flex-1 space-y-2">
                <Link
                 href="/dashboard"
                  onClick={() => {
                   
                    setNavTitle("Dashboard");
                  }}
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group cursor-pointer"
                >
                  <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Dashboard
                </Link>
                <Link
                  href="/categories"
                  onClick={() => {
                  
                    setNavTitle("Categories");
                  }}
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group cursor-pointer"
                >
                  <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                 Categories
                </Link>

                <Link
                 href="/products"
                  onClick={() => {
                   
                    setNavTitle("Products");
                  }}
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group cursor-pointer"
                >
                  <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                 Products
                </Link>
                <Link
                 href="/sellers"
                  onClick={() => {
                   
                    setNavTitle("Sellers");
                  }}
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group cursor-pointer"
                >
                  <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
               Sellers
                </Link>
                <Link
                 href="/customers"
                  onClick={() => {
                   
                    setNavTitle("Customers");
                  }}
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group cursor-pointer"
                >
                  <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
              Customers
                </Link>

                <Link  href="/subCategories"  onClick={() => {
                   
                   setNavTitle("SubCategories");
                 }}
                className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group cursor-pointer">
                  <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                 SubCategories
                </Link>
                <Link href="/request"  onClick={() => {
                   
                   setNavTitle("Request");
                 }} className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group cursor-pointer">
                  <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                 Request
                </Link>
              </nav>
              <hr className="border-gray-700" />
              <nav className="flex-1 space-y-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg hover:bg-indigo-600 group cursor-pointer"
                  onClick={() => {
                 
                    setNavTitle("Setting");
                  }}
                >
                  <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
              </nav>
            </div>

            <div className="pb-4 mt-auto">
              {openDropdown && (
                <>
                  <div className="h-40 bg-black rounded-xl px-3 py-3">
                    <div className="flex" onClick={() => setOpenDropdown(false)}>
                      {/* <AiOutlineLogout className=" h-5 w-5 mt-1 mr-2 text-white" /> */}
                      <div className="text-md text-white mt-0.5 ">Sign Out</div>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg hover:bg-gray-700"
              >
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-female.png"
                  alt=""
                />
                Mariana Jones
                <svg className="w-5 h-5 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
        <div className="flex flex-1 px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between flex-1 lg:justify-end">
            <div className="flex items-center -m-2 xl:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div className="flex ml-4 mr-auto xl:ml-64">
              <div className="flex items-center flex-shrink-0">
                <div className="block w-auto text-xl font-medium text-gray-800 ">{navTitle}</div>
              </div>
            </div>

            <div className="flex items-center space-x-6 sm:ml-5">
              <div className="relative">
                <button type="button" className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </button>
              </div>

              <button type="button" className="flex items-center max-w-xs rounded-full xl:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                <img
                  className="object-cover bg-gray-300 rounded-full w-9 h-9"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/2/avatar-male.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
