package com.tutorial.crud.service;

import com.tutorial.crud.entity.Producto;
import com.tutorial.crud.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Clase de servicio que gestiona las operaciones relacionadas con los productos.
 */
@Service
@Transactional
public class ProductoService {

    @Autowired
    ProductoRepository productoRepository;

    /**
     * Obtiene una lista de todos los productos.
     *
     * @return Lista de productos.
     */
    public List<Producto> list(){
        return productoRepository.findAll();
    }

    /**
     * Obtiene un producto por su ID.
     *
     * @param id ID del producto.
     * @return Producto encapsulado en un Optional.
     */
    public Optional<Producto> getOne(int id){
        return productoRepository.findById(id);
    }

    /**
     * Obtiene un producto por su nombre.
     *
     * @param nombre Nombre del producto.
     * @return Producto encapsulado en un Optional.
     */
    public Optional<Producto> getByNombre(String nombre){
        return productoRepository.findByNombre(nombre);
    }

    /**
     * Guarda un nuevo producto o actualiza uno existente.
     *
     * @param producto Producto a guardar o actualizar.
     */
    public void  save(Producto producto){
        productoRepository.save(producto);
    }

    /**
     * Elimina un producto por su ID.
     *
     * @param id ID del producto a eliminar.
     */
    public void delete(int id){
        productoRepository.deleteById(id);
    }

    /**
     * Verifica si existe un producto con el ID especificado.
     *
     * @param id ID del producto a verificar.
     * @return true si existe un producto con el ID especificado, false en caso contrario.
     */
    public boolean existsById(int id){
        return productoRepository.existsById(id);
    }

    /**
     * Verifica si existe un producto con el nombre especificado.
     *
     * @param nombre Nombre del producto a verificar.
     * @return true si existe un producto con el nombre especificado, false en caso contrario.
     */
    public boolean existsByNombre(String nombre){
        return productoRepository.existsByNombre(nombre);
    }
}
