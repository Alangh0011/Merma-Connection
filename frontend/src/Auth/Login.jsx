import React, { useState } from 'react';
//import { FcGoogle } from "react-icons/fc";
//import { FaFacebook } from "react-icons/fa";
//import { FaGithub } from "react-icons/fa";
import Hero from './Hero'
import { Link } from 'react-router-dom';
import Modal from './Modal';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie'; // Import for cookie management


function Login({setIsLoggedIn}) {
    
    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies();
    
    // Estados para controlar el modal y su contenido
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalError, setModalError] = useState(false); // Nuevo estado para indicar si hay un error

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombreUsuario : "",
        password : ""
    });
    // Función para manejar cambios en los inputs del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.nombreUsuario === "" || formData.password === "") {
            setModalMessage('Por favor complete todos los campos.');
            setModalError(true);
            setModalOpen(true);
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/auth/login', formData);
            const { token, authorities } = response.data; // Desestructurar el token y las autoridades

            // Store token and authorities securely in a cookie
            setCookie('token', token, { maxAge: 3600, httpOnly: true });
            setCookie('authorities', JSON.stringify(authorities), { maxAge: 3600, httpOnly: true });

            setIsLoggedIn(true); // Actualizar el estado de autenticación
            history.push('/home');
        } catch (error) {
            console.error('Error:', error);
            // Manejo de errores
        }
    };
    

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-200">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 shadow bg-opacity-50">
            <h1 className="text-5xl font-semibold">Merma-Connection</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Bienvenido, inserta tus datos</p>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Nombre de usuario o correo</label>
                    <input
                    className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                    placeholder="ingresa tu usuario o correo"
                    value={formData.nombreUsuario}
                    onChange={handleChange}
                    name='nombreUsuario'
                    type='text'
                    />
                </div>
            </div>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Contraseña</label>
                    <input
                    className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                    placeholder="ingresa tu contraseña"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    name='password'/>
                </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
                <div>
                    <input
                    type="checkbox"
                    id="remember"
                    className=""/>
                    <label htmlFor="remember"
                    className="mt-2 font-medium text-base">Recordar contraseña y nombre de usuario</label>
                </div>
                <button className="font-medium text-base text-green-500">Olvide mi contraseña</button>
            </div>
            <div className="mt-1 flex justify-between items-center">
                <p className="mt-1 font-medium text-base">¿No tienes cuenta?</p>
                <Link 
                className="font-medium text-base text-green-500"
                to="/register">Registrate</Link>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button 
                onClick={handleSubmit}
                className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out">Sign in</button>
            </div>
            {/* 
            <div className="mt-8 flex mx-auto space-x-10 justify-center">
                <button className="border-2 border-gray-100 rounded-md px-4 py-2 mt-2 active:scale-[1.1] active:duration-80 transition-all hover:scale-[1.2] ease-in-out">
                    <FcGoogle className="text-4xl "/>
                </button>
                <button className="border-2 border-gray-100 rounded-md px-4 py-2 mt-2 active:scale-[1.1] active:duration-80 transition-all hover:scale-[1.2] ease-in-out">
                    <FaFacebook className="text-4xl text-blue-700"/>
                </button>
                <button className="border-2 border-gray-100 rounded-md px-4 py-2 mt-2 active:scale-[1.1] active:duration-80 transition-all hover:scale-[1.2] ease-in-out">
                    <FaGithub className="text-4xl"/>
                </button>
            </div>
            */}
              {/* Componente Modal para mostrar mensajes */}
            <Modal 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)} 
            data={{ error: modalError, message: modalMessage }} />
        </div>
    </div>
    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <Hero/>
    </div>
</div>
    )
}   

export default Login
