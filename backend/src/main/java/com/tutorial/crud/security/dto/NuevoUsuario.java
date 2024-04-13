package com.tutorial.crud.security.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

public class NuevoUsuario {
    @NotBlank
    private String nombre;
    @NotBlank
    private String nombreUsuario;
    @Email
    private String email;
    @NotBlank
    private String password;
    private Set<String> roles = new HashSet<>();

    // Getters y Setters para los campos de la clase

    /**
     * Obtiene el nombre del nuevo usuario.
     * @return El nombre del nuevo usuario.
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * Establece el nombre del nuevo usuario.
     * @param nombre El nombre del nuevo usuario.
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * Obtiene el nombre de usuario del nuevo usuario.
     * @return El nombre de usuario del nuevo usuario.
     */
    public String getNombreUsuario() {
        return nombreUsuario;
    }

    /**
     * Establece el nombre de usuario del nuevo usuario.
     * @param nombreUsuario El nombre de usuario del nuevo usuario.
     */
    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    /**
     * Obtiene el correo electrónico del nuevo usuario.
     * @return El correo electrónico del nuevo usuario.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Establece el correo electrónico del nuevo usuario.
     * @param email El correo electrónico del nuevo usuario.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Obtiene la contraseña del nuevo usuario.
     * @return La contraseña del nuevo usuario.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Establece la contraseña del nuevo usuario.
     * @param password La contraseña del nuevo usuario.
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Obtiene los roles asignados al nuevo usuario.
     * @return Los roles asignados al nuevo usuario.
     */
    public Set<String> getRoles() {
        return roles;
    }

    /**
     * Establece los roles asignados al nuevo usuario.
     * @param roles Los roles asignados al nuevo usuario.
     */
    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }
}
