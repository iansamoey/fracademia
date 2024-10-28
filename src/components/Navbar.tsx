import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Academic Writing
        </div>
        <div className="space-x-4">
          <Link href="/services">
            <button className="text-white hover:bg-gray-500 px-4 py-2 rounded">View Services</button>
          </Link>
          <Link href="/order">
            <button className="text-white hover:bg-gray-500 px-4 py-2 rounded">Order Now</button>
          </Link>
          <Link href="/dashboard/admin-dashboard">
            <button className="text-white hover:bg-gray-500 px-4 py-2 rounded">Admin Dashboard</button>
          </Link>
          <Link href="/dashboard/userDashboard">
            <button className="text-white hover:bg-gray-500 px-4 py-2 rounded">User Dashboard</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
