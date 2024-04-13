package com.tutorial.crud.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Clase que representa la entidad Producto en la base de datos.
 */
@Entity
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nombre;
    private float precio;

    /**
     * Constructor por defecto de la clase Producto.
     */
    public Producto() {
    }

    /**
     * Constructor de la clase Producto con nombre y precio.
     *
     * @param nombre Nombre del producto.
     * @param precio Precio del producto.
     */
    public Producto(String nombre, float precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    /**
     * Obtiene el ID del producto.
     *
     * @return El ID del producto.
     */
    public int getId() {
        return id;
    }

    /**
     * Establece el ID del producto.
     *
     * @param id El ID del producto.
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Obtiene el nombre del producto.
     *
     * @return El nombre del producto.
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * Establece el nombre del producto.
     *
     * @param nombre El nombre del producto.
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * Obtiene el precio del producto.
     *
     * @return El precio del producto.
     */
    public float getPrecio() {
        return precio;
    }

    /**
     * Establece el precio del producto.
     *
     * @param precio El precio del producto.
     */
    public void setPrecio(float precio) {
        this.precio = precio;
    }
}
