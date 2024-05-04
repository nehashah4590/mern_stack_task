import React from 'react';
import Logo from '../../public/companylogo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-20 md:h-16 px-8 md:px-20 flex items-center justify-between border-b border-gray-300">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="h-8 w-auto" />
      </div>
      
      {/* Navbar Links */}
      <ul className="hidden lg:flex items-center space-x-6">
        <li><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
        <li><Link href="/" className="text-gray-700 hover:text-gray-900">Our Products</Link></li>
        <li><Link href="/" className="text-gray-700 hover:text-gray-900">Resources</Link></li>
        <li><Link href="/contacts" className="text-gray-700 hover:text-gray-900">Contacts</Link></li>
      </ul>
      <ul className="hidden lg:flex items-center space-x-6">
        <li><button className='px-4 py-2 text-black hover:text-white rounded-md hover:bg-blue-500'>Sign Up</button></li>
        <li><button className='bg-blue-500 px-4 py-2 text-white hover:text-blue-500 rounded-md hover:bg-white '>Log In</button></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-gray-700 hover:text-gray-900">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
