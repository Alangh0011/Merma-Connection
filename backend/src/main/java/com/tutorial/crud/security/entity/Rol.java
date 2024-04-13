package com.tutorial.crud.security.entity;

import com.tutorial.crud.security.enums.RolNombre;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Clase que representa la entidad Rol en la base de datos.
 */
@Entity
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Enumerated(EnumType.STRING)
    private RolNombre rolNombre;

    /**
     * Constructor por defecto de la clase Rol.
     */
    public Rol() {
    }

    /**
     * Constructor de la clase Rol con parámetro.
     *
     * @param rolNombre Nombre del rol.
     */
    public Rol(@NotNull RolNombre rolNombre) {
        this.rolNombre = rolNombre;
    }

    /**
     * Obtiene el ID del rol.
     *
     * @return El ID del rol.
     */
    public int getId() {
        return id;
    }

    /**
     * Establece el ID del rol.
     *
     * @param id El ID del rol.
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Obtiene el nombre del rol.
     *
     * @return El nombre del rol.
     */
    public RolNombre getRolNombre() {
        return rolNombre;
    }

    /**
     * Establece el nombre del rol.
     *
     * @param rolNombre El nombre del rol.
     */
    public void setRolNombre(RolNombre rolNombre) {
        this.rolNombre = rolNombre;
    }
}

