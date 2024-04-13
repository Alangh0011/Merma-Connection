package com.tutorial.crud.repository;

import com.tutorial.crud.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repositorio que proporciona métodos para realizar operaciones CRUD en la entidad Producto.
 */
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    /**
     * Busca un producto por su nombre.
     *
     * @param nombre Nombre del producto a buscar.
     * @return Producto encontrado, encapsulado en un Optional.
     */
    Optional<Producto> findByNombre(String nombre);

    /**
     * Verifica si existe un producto con el nombre especificado.
     *
     * @param nombre Nombre del producto a verificar.
     * @return true si existe un producto con el nombre especificado, false en caso contrario.
     */
    boolean existsByNombre(String nombre);
}
