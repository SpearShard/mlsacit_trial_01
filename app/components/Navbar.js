"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const authStatus = Cookies.get('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);

    setAnimate(true);
  }, []);

  const handleSignOut = () => {
    Cookies.remove('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="my-4 w-full max-w-7xl px-4">
        {/* Navbar container */}
        <div className="flex items-center justify-between relative">

          {/* Left links */}
          <div className="bg-slate-500 text-white rounded-md p-3 flex items-center justify-start space-x-8 shadow-lg w-full sm:w-1/2">
            <Link href="/" className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500">HOME</Link>
            <Link href="/about" className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500">ABOUT</Link>
            <Link href="/events" className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500">EVENTS</Link>
            <Link href="/teams" className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500">TEAM</Link>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center mx-4">
            <Image
              src="/msc_logo.png"
              alt="MSC Logo"
              width={100}
              height={100}
              className={`rounded-sm transform transition-transform duration-500 ${animate ? 'scale-105' : 'scale-100'}`}
            />
          </div>

          {/* Right links */}
          <div className="bg-slate-500 text-white rounded-md p-3 flex items-center justify-end space-x-8 shadow-lg w-full sm:w-1/2">
            {!isAuthenticated ? (
              <>
                <Link href="/login" className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500">LOGIN</Link>
                <Link href="/signup" className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500">SIGN UP</Link>
              </>
            ) : (
              <button
                onClick={handleSignOut}
                className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
              >
                SIGN OUT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
