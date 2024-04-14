import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const MaquinaEscribir = () => {
    const [text] = useTypewriter({
        words: ["Ricardo", "Alan", "Fernando", "Juan"],
        loop: true, // Para repetir la animación
        delay: 100, // Velocidad de escritura
        deleteSpeed: 100, // Velocidad de borrado
    })
    
    return (
        <div className='App'>
            <span className="text-center text-base font-medium mix-blend-difference md:text-xl">
            Esta es una página fue realizada por: {text}
            </span>
            <Cursor cursorStyle='|' />
        </div>
    )
};

export default MaquinaEscribir;


