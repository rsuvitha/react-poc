import React from 'react';

const Header = () => {
    return (
      <header className='fixed bg-black text-white w-full z-50 text-xl'>
        <div className='h-20 px-4 flex'>
          <div className='my-2'>
            <a href="/">
              <img
                src="https://www.bobbibrowncosmetics.com/media/export/cms/logo.png"
                alt="Logo" className='w-60 mt-5'
              />
            </a>          
          </div>

          <div className='text-2xl grow text-center my-6'>
            <h1>Shopping Site</h1>
          </div>
        
          <div className='my-6 p-2.5'>
            <a href="#">
              <img src="https://e.bobbibrown.na.us.stage.ncsa.elcdev.net/sites/bobbibrown/themes/bb_base/img/icons/svg/Search-White.svg"
                alt="search" className='h-5 w-5' />
            </a>
          </div>

          <div className='my-6 p-2.5'>
            <a href="#">
              <img src="https://e.bobbibrown.na.us.stage.ncsa.elcdev.net/sites/bobbibrown/themes/bb_base/img/icons/svg/MyAccount-White.svg"
                alt="My account" className='h-5 w-5'/>
            </a>
          </div>

          <div className='my-6 p-2.5'>
            <a href="#">
              <img src="https://e.bobbibrown.na.us.stage.ncsa.elcdev.net/sites/bobbibrown/themes/bb_base/img/icons/svg/Bag-White.svg"
                alt="Cart" className='h-5 w-5' />
            </a>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;