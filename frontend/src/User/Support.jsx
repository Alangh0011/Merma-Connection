import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from './support.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Vendedores</h2>
          <h3 className='text-5xl font-bold py-6 text-center'>Encuentra comida a bajo precio</h3>
          <p className='py-4 text-3xl text-slate-300'>Conéctate con vendedores dispuestos a ofrecer sus excedentes de producción a precios reducidos. Explora las opciones disponibles y encuentra los productos que necesitas para tu negocio.</p>
        </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Martha Suarez</h3>
                    <p className='text-gray-600 text-xl'>Soy una ama de casa que hace comida de productos frescos y caseros ofrecidos en mi localidad, desde pasteles y galletas hasta alimentos preparados con amor en sus propias cocinas, sin embargo suele quedar merma de alimentos.</p>
                    </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contactala  <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Vendedor de tianguis</h3>
                      <p className='text-gray-600 text-xl'>Soy un vendedor de Frutas y Verduras en diferentes tianguis, pero un gran reto es que por cantidades grandes suelen quedar residuos de los mismos.</p>
                  </div>z
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contactalo<ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Krys Donas</h3>
                      <p className='text-gray-600 text-xl'>Somos una empresa que quiere ser pionera en el cambio de la merma de comida.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
