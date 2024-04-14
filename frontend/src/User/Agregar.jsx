import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../Auth/Modal';
import { Redirect } from 'react-router-dom';

const Agregar = () => {
    const [registroCompletado, setRegistroCompletado] = useState(false);


    // Estados para controlar el modal y su contenido
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalError, setModalError] = useState(false); // Nuevo estado para indicar si hay un error

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombre : "",
        precio : 0
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
        // Validar campos obligatorios
        if (formData.nombre === "" || formData.precio === 0) {
        setModalMessage('Por favor complete todos los campos.');
        setModalError(true);
        setModalOpen(true);
        return; // Evitar que se envíe el formulario si hay campos vacíos
        }
        try {
            const token = localStorage.getItem('token');
            await axios.post(`http://localhost:8080/producto/create`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setModalError(false);
            setModalOpen(true);
            setModalMessage('Producto registrado exitosamente');
            setRegistroCompletado(true); // Establecer el estado de registro completado
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

        // Si el registro se ha completado, redirigir al usuario a la página de "home"
    if (registroCompletado) {
        return <Redirect to="/home" />;
    }

    return (
        
        <div className="p-4">
            
            <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 shadow bg-opacity-50">
            <h1 className="text-2xl font-bold mb-4 mt-4">Agregar alimento</h1>
            <div className="mt-8">
                                    {/* Formulario de registro */}
                <div>
                    <label className="text-lg font-medium">Ingresa el producto y cantidad</label>
                    <input
                    className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                    placeholder="30 manzanas"
                    value={formData.nombre}
                    type='text'
                    onChange={handleChange}
                    name='nombre'
                    />
                </div>
            </div>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Ingresa el precio</label>
                    <input
                    className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                    placeholder="$40"
                    value={formData.precio}
                    onChange={handleChange}
                    name='precio'
                    type='double'
                    />
                </div>
            </div>
                    {/* Botón para enviar el formulario */}
                    <div className="mt-8 flex flex-col gap-y-4">
                <button 
                onClick={handleSubmit}
                className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out">Agregar</button>
            </div>
                    {/* Componente Modal para mostrar mensajes */}
            <Modal 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)} 
            data={{ error: modalError, message: modalMessage }} />
        </div>
    </div>
    );
};

export default Agregar;