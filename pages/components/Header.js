import React from 'react'
import Image from 'next/image'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return (
    <header >
      <div className="flex items-center bg-white p-1 flex-grow py-2">

      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">        
      <Image
                src="https://drive.google.com/uc?export=view&id=14FCTIONfXT8ZPA7pH4O03MgEBiWjiJB5"
                width={250}
                height={80}
                alt=""
                objectFit='contain'/>
      </div>


      <div className="hidden sm:flex items-center bg-green-700 hover:bg-green-600 h-10 rounded-md flex-grow cursor-pointer">
        <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 border-green-700"/>
        <SearchOutlinedIcon className="h-12 p-4 text-white"/>
      </div>


      <div className="text-green-700 flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
        <div className="link relative link flex items-center">
          <FavoriteBorderOutlinedIcon className="h-10"/>
          <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Wishlist</p>
        </div>
        <div className="link relative link flex items-center">
          <PersonOutlineOutlinedIcon className="h-10"/>
          <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Account</p>
        </div>
        <div className="relative link flex items-center">
          <div className=""><span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-green-700 text-center rounded-full text-white font-bold">0</span>
          <ShoppingCartOutlinedIcon className="h-10"/></div>          
          <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Cart</p>
        </div>
      </div>
      </div>
      <div className="flex items-center bg-ridamen-blue text-white text-sm space-x-3 p-2 pl-6">
        <p className="link ">Home</p>
        <p className="link">Shop</p>
        <p className="link">Whole Sale</p>
        <p className="link">Black Friday</p>
        <p className="link hiden lg:inline-flex">Flash Sales</p>        
        <p className="link hiden lg:inline-flex">Donkomi</p>
      </div>

    </header>
  )
}

export default Header