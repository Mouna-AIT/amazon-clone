import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/*top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-amber-500 hover:bg-amber-400">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/*right side */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Nino7</p>
            <p className="font-extrabold md:text-sm">Account</p>
          </div>

          <div className="link">
            <p> Returns</p>
            <p className="font-extrabold md:text-sm">&amp; orders</p>
          </div>
          <div className="relative link flex items-center">
              <span className= 'absolute top-0 right-0 md:right-10 h-4 w-4 bg-amber-500 text-center rounded-full text-black font-bold'>0</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
{/*bottom nav */}
      <div className= 'flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm '>
        <p className= 'link flex items-center'>
          <MenuIcon className= 'h-6 mr-1'/>
          All
        </p>
        <p className= 'link'>Prime Viceo</p>
        <p className= 'link'>Amazon Busniess</p>
        <p className= 'link'>Today's Deals</p>
        <p className= 'link hidden lg:inline-flex'>Electronics</p>
        <p className= 'link hidden lg:inline-flex'>Food &amp; Grocery</p>
        <p className= 'link hidden lg:inline-flex'>Prime</p>
        <p className= 'link hidden lg:inline-flex'>Shopper ToolKit</p>
        <p className= 'link hidden lg:inline-flex'>Health &amp; Personal Care</p>
        
      </div>
    </header>
  );
}

export default Header;
