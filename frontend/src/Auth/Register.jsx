import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import Hero from './Hero'; // Importación del componente Hero
import { Link } from 'react-router-dom';

function Register() {
    // Estados para controlar el modal y su contenido
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalError, setModalError] = useState(false); // Nuevo estado para indicar si hay un error

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombre : "",
        nombreUsuario : "",
        email: "",
        password : "",
        roles : [""]
    });
    // Función para manejar cambios en los inputs del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // Función para manejar cambios en el rol seleccionado
    const handleRoleChange = (e) => {
        const selectedRole = e.target.value; // Valor del radio button seleccionado
        setFormData({
            ...formData,
            roles: [selectedRole] // Configurar el valor de roles como un array con el rol seleccionado
        });
    };
    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validar campos obligatorios
        if (formData.nombre === "" || formData.nombreUsuario === "" || formData.email === "" || formData.password === "") {
        setModalMessage('Por favor complete todos los campos.');
        setModalError(true);
        setModalOpen(true);
        return; // Evitar que se envíe el formulario si hay campos vacíos
        }
        try {
            const response = await axios.post('http://localhost:8080/auth/nuevo', formData);
            console.log(response.data);
            setModalMessage('Usuario registrado exitosamente');
            setModalError(false);
            setModalOpen(true);
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                console.log(error.response.data);
                setModalMessage(error.response.data.message);
            } else if (error.request) {
                console.log(error.request);
                setModalMessage('No se recibió respuesta del servidor');
            } else {
                console.log('Error', error.message);
                setModalMessage('Ocurrió un error inesperado');
            }
            setModalError(true);
            setModalOpen(true);
        }
    };
    

    return (
    <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-200">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 shadow bg-opacity-50">
            <h1 className="text-5xl font-semibold">WELCOME</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Welcome back! Please enter your details</p>
            <div className="mt-8">
                                    {/* Formulario de registro */}
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input
                    className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                    placeholder="enter your email"
                    value={formData.email}
                    type='email'
                    onChange={handleChange}
                    name='email'
                    />
                </div>
            </div>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Name complete</label>
                    <input
                    className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                    placeholder="enter your name complete"
                    value={formData.nombre}
                    onChange={handleChange}
                    name='nombre'
                    type='text'
                    />
                </div>
            </div>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Name user</label>
                    <input
                    className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                    placeholder="enter your name user"
                    value={formData.nombreUsuario}
                    onChange={handleChange}
                    name='nombreUsuario'
                    type='text'
                    />
                </div>
            </div>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input
                    className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                    placeholder="enter your password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    name='password'
                    />
                </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
            <div>
                    <label className="text-lg font-medium">Choose a role:</label>
                    <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="user"
                            name="rol"
                            value="user"
                            checked={formData.roles[0] === 'user'}
                            onChange={handleRoleChange}
                            className="mr-2"
                        />
                        <label htmlFor="user" className="mr-4">Usuario</label>
                        <input
                            type="radio"
                            id="admin"
                            name="rol"
                            value="admin"
                            checked={formData.roles[0] === 'admin'}
                            onChange={handleRoleChange}
                            className="mr-2"
                        />
                        <label htmlFor="admin">Admin</label>
                    </div>
                </div>
            </div>
            <div className="mt-1 flex justify-between items-center">
                <p className="mt-1 font-medium text-base">
                    Do you already have an account?</p>
                        {/* Enlace para redirigir a la página de Login */}

                <Link 
                className="font-medium text-base text-green-500"
                to="/login">Go to Login</Link>

            </div>
                    {/* Botón para enviar el formulario */}
            <div className="mt-8 flex flex-col gap-y-4">
                <button 
                onClick={handleSubmit}
                className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out">Register</button>
            </div>
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

export default Register
