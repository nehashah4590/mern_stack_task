import React from 'react';
import Logo from '../../public/companylogo.png';
import dropdown from '../../public/down.png';
import Image from 'next/image';
import Link from 'next/link';
import button from '../../public/Button.png';

const Navbar = () => {
  return (
    <nav className="w-full h-20 md:h-16 px-2 lg:px-24 flex items-center justify-between border-b border-gray-300">
      {/* Logo */}
      <div className=" lg:flex items-center space-x-10 font-semibold text-sm">
      <div className="flex items-center lg:pr-16 lg:pl-[10px] pl-0">
        <Image src={Logo} alt="Logo" className="h-8 w-auto" />
      </div>
     
       <ul className='hidden lg:flex space-x-10'>
       <li><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
        <li><Link href="/" className="text-gray-700 hover:text-gray-900">Our Products</Link></li>
        <li><Link href="/" className="text-gray-700 hover:text-gray-900 flex ">Resources
         <Image src={dropdown} alt='dropdown' className='ml-2'/></Link></li>
        <li><Link href="/contacts" className="text-gray-700 hover:text-gray-900">Contacts</Link></li>
       </ul>
      </div>
      <ul className="hidden lg:flex items-center space-x-6 font-semibold text-sm">
        <li><button className='px-4 py-2 text-[#437EF7] hover:text-white rounded-md hover:bg-[#437EF7]'>Sign Up</button></li>
        <li><button className='bg-[#437EF7] px-4 py-2 text-white hover:text-[#437EF7] rounded-md hover:bg-white '>Log In</button></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-gray-700 hover:text-gray-900 flex justify-end">
        <Image src={button} alt='button'/>
      </button>
    </nav>
  );
};

export default Navbar;
