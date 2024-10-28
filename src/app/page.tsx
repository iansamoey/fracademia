"use client"; // Ensure this is a client component

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar'; // Adjust import based on your project structure

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-200 to-white-100 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6">Welcome to Academic Writing</h1>
        <p className="text-xl text-gray-700 mb-8">
          Your go-to service for all academic writing needs. 
          We help you succeed academically with top-notch writing assistance.
        </p>
        <div className="space-x-4 mb-6">
          <Link href="/auth/signup">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg">
              Sign Up
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-lg">
              Log In
            </button>
          </Link>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Explore a variety of writing services tailored for your needs.</p>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Academic Writing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
