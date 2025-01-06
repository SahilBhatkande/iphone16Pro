import React from 'react';  
import { appleImg } from "../utils";  
import { bagImg } from '../utils';  
import { searchImg } from '../utils';  
import { navLists } from '../constants';  

const Navbar = () => {  
  return (  
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center bg-black">  
      <nav className="w-full flex justify-between items-center max-w-6xl">  
        {/* Left Section (Apple Icon) */}  
        <img src={appleImg} alt="apple" width={14} height={18} />  

        {/* Center Section (Nav Links) */}  
        <div className="flex flex-1 justify-center max-sm:hidden">  
          {navLists.map((nav) => (  
            <div  
              key={nav}  
              className="px-5 text-sm cursor-pointer text-gray-100 hover:text-white transition-all"  
            >  
              {nav}  
            </div>  
          ))}  
        </div>  

        {/* Right Section (Icons) */}  
        <div className="flex items-center space-x-4">  
          <img src={bagImg} alt="bag" width={18} height={18} />  
          <img src={searchImg} alt="Search" width={18} height={18} />  
        </div>  
      </nav>  
    </header>  
  );  
};  

export default Navbar;  
