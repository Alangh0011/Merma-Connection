
import MaquinaEscribir from './Maquina_escribir';

export default function Hero() {


    const height = "h-[calc(100vh-8rem)]";
    return (
        <section className={`mt-4 flex flex-col items-center justify-center px-4 text-white md:mx-10 ${height}`} id="inicio">
           
            <img src="https://mejorconsalud.as.com/wp-content/uploads/2021/04/frutas-verduras-colores-1200x801.jpg" className="absolute h-full w-full rounded-3xl object-cover"/>
            <div className="flex flex-col gap-3"/>
            <h1 className="text-center text 4x1 font-bold text-black md:text-8xl">Bienvenido</h1>
            
            
        </section>
    );
}
