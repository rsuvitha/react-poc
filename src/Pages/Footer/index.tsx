import React from 'react';

const Footer = () => {
    return (
      <div className='bg-black text-white w-full'>
        <footer className='py-7 px-5 flex'>
          <div className='grow'>
            <a href="/">
              Terms and Condition
            </a>
          </div>
          <div className='grow'>
            <a href="/">
              Privacy Policy
            </a>
          </div>
          <div className='grow'>
            <a href="/">
              Account
            </a>
          </div>
          <div className='grow'>
            <a href="/">
              Contact US
            </a>
          </div>
          <div className='grow'>
            <a href="/">
              FAQ
            </a>
          </div>
          
        </footer>
      </div>
    );
  };
  
  export default Footer;