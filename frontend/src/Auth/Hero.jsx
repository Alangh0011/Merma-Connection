
import MaquinaEscribir from './Maquina_escribir';

export default function Hero() {


    const height = "h-[calc(100vh-8rem)]";
    return (
        <section className={`mt-4 flex flex-col items-center justify-center px-4 text-white md:mx-10 ${height}`} id="inicio">
            <video autoPlay loop muted className="absolute h-full w-full rounded-3xl object-cover">
                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4"/>
                Tu navegador no soporta el elemento video
            </video>
            <div className="flex flex-col gap-3"/>
            <h1 className="text-center text 4x1 font-bold mix-blend-difference md:text-8xl">WELCOME</h1>
                <MaquinaEscribir />
            
        </section>
    );
}
