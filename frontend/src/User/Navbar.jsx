import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Merma-Connect.</h1>
        </div>
        <div className='hidden md:flex pr-4'>
        <Route exact path="/login" className='px-8 py-3 mr-4'>
            Login
          </Route>
          <Route exact path="/register" className='px-8 py-3 mr-4'>
            Register
          </Route>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'><ScrollLink onClick={handleClose} to="home" smooth={true} duration={500}>Objetivo</ScrollLink></li>
        <li className='border-b-2 border-zinc-300 w-full'><ScrollLink onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>Quiénes somos</ScrollLink></li>
        <li className='border-b-2 border-zinc-300 w-full'><ScrollLink onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Productos</ScrollLink></li>
        <li className='border-b-2 border-zinc-300 w-full'><ScrollLink onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Servicios</ScrollLink></li>
        <div className='flex flex-col my-4'>
          <RouterLink to="/login" className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Login</RouterLink>
          <RouterLink to="/register" className='px-8 py-3'>Registro</RouterLink>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

