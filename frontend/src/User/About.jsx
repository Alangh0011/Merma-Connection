import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
    <h2 className='text-5xl font-bold'>Plataforma para reducir la merma de alimentos</h2>
    <p className='text-3xl py-6 text-gray-500'>Conectamos a vendedores de alimentos con excedentes de producción con compradores interesados en adquirir esos excedentes a precios reducidos. Nuestra plataforma ofrece las siguientes características:</p>
</div>

<div className='grid md:grid-cols-3 gap-1 px-2 mx-2 text-center'>
    <div className='border px-2 mx-2 py-8 rounded-xl shadow-xl' >
        <p className='text-6xl font-bold text-indigo-600'>Compra y venta</p>
        <p className='text-gray-400 mt-2'>Facilitamos la transacción entre vendedores y compradores, permitiendo a los vendedores obtener ingresos adicionales por su merma y a los compradores acceder a productos de calidad a precios asequibles.</p>
    </div>
    <div  className='border px-2 mx-2 py-8 rounded-xl shadow-xl' >
        <p className='text-6xl font-bold text-indigo-600'>Chatbot de recetas</p>
        <p className='text-gray-400 mt-2'>Ofrecemos un chatbot integrado que sugiere recetas creativas y deliciosas basadas en los productos adquiridos, ayudando a los compradores a aprovechar al máximo su compra y reducir el desperdicio de alimentos.</p>
    </div>
    <div className='border px-2 mx-2 py-8 rounded-xl shadow-xl' >
        <p className='text-6xl font-bold text-indigo-600'>Escalabilidad</p>
        <p className='text-gray-400 mt-8 py-4'>Nuestra plataforma es escalable y puede adaptarse tanto a vendedores individuales con volúmenes bajos como a grandes empresas con excedentes de producción significativos, promoviendo así la reducción general de la merma de alimentos.</p>
    </div>
</div>

        </div>
    </div>
  )
}

export default About