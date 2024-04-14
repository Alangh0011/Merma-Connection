import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Agregar from './Agregar'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img
        className='w-full h-full object-cover'
        src="./src/assets/verduras.jpg"
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>Se parte del cambio para la merma de comida</h1>
        <h2 className='py-4'>Se parte del 3% que ayuda a gente necesitada</h2>
        <form
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div className='w-full flex items-center justify-center'>
            <Agregar/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
