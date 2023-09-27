// Navbar.tsx

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl font-bold">Fitness App</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/fitness">
              <p className="text-white hover:underline">Fitness</p>
            </Link>
          </li>
          <li>
            <Link href="/schedule">
              <p className="text-white hover:underline">Schedule</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
