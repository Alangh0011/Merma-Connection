package com.tutorial.crud.security.dto;

import javax.validation.constraints.NotBlank;

public class LoginUsuario {
    @NotBlank
    private String nombreUsuario;
    @NotBlank
    private String password;

    // Getters y Setters para los campos de la clase

    /**
     * Obtiene el nombre de usuario del usuario que está intentando iniciar sesión.
     * @return El nombre de usuario del usuario que está intentando iniciar sesión.
     */
    public String getNombreUsuario() {
        return nombreUsuario;
    }

    /**
     * Establece el nombre de usuario del usuario que está intentando iniciar sesión.
     * @param nombreUsuario El nombre de usuario del usuario que está intentando iniciar sesión.
     */
    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    /**
     * Obtiene la contraseña del usuario que está intentando iniciar sesión.
     * @return La contraseña del usuario que está intentando iniciar sesión.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Establece la contraseña del usuario que está intentando iniciar sesión.
     * @param password La contraseña del usuario que está intentando iniciar sesión.
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
