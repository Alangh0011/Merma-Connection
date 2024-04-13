import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductPDFGenerator from '../Components/ProductPDFGenerator';


const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
        const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
        const response = await axios.get('http://localhost:8080/producto/lista', {
            headers: {
            Authorization: `Bearer ${token}`, // Agregar el token a la cabecera Authorization
            },
        });
        setProductos(response.data);
        } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
        }
    };
    

    const buscarProductoPorNombre = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/producto/detailname/${nombre}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProductos([response.data]);
        } catch (error) {
            console.error('Error al obtener el producto por nombre:', error);
        }
    };
    const buscarProductoPorId = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/producto/detail/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProductos([response.data]);
        } catch (error) {
            console.error('Error al obtener el producto por nombre:', error);
        }
    };
    
    const eliminarProducto = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8080/producto/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Actualizar la lista de productos después de eliminar el producto
            fetchProductos();
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };
    
    

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
            <ProductPDFGenerator productos={productos} />
            <div className="mt-8 flex flex-col gap-y-4">
                
                    <button 
                        onClick={() => buscarProductoPorNombre()}
                        className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out"
                    >
                        <Link 
                        className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out" 
                        to={`/agregar`}>Agregar producto</Link>
                    </button>
                    
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
                <div className="flex items-center justify-between">
                <label className="text-lg font-medium mr-3">Buscar por nombre</label>
                <div className="flex">
                    <input
                        className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent mr-2"
                        placeholder="ingresa el nombre"
                        name="nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                    />
                    <button 
                        onClick={() => buscarProductoPorNombre()}
                        className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out"
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
                <div className="flex items-center justify-between">
                <label className="text-lg font-medium mr-3">Buscar por id</label>
                <div className="flex">
                    <input
                        className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent mr-2"
                        placeholder="ingresa el id"
                        name="nombre"
                        onChange={(e) => setId(e.target.value)}
                        type="text"
                    />
                    <button 
                        onClick={() => buscarProductoPorId()}
                        className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out"
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>

            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Precio</th>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <tr key={producto.id}>
                            <td className="border px-4 py-2">{producto.id}</td>
                            <td className="border px-4 py-2">{producto.nombre}</td>
                            <td className="border px-4 py-2">${producto.precio}</td>
                            <td className="border px-4 py-2">
                            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to={`/actualizar/${producto.id}`}>Actualizar</Link>
                            </td>
                            <td className="border px-4 py-2">
                            <button onClick={() => eliminarProducto(producto.id)} className="bg-red-500 hover:bg-red-700 text-white     font-bold py-2 px-4 rounded">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default Admin;
