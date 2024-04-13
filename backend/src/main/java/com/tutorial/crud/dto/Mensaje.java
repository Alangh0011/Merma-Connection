package com.tutorial.crud.dto;

/**
 * Clase utilizada para representar un mensaje.
 */
public class Mensaje {
    private String mensaje;

    /**
     * Constructor de la clase Mensaje.
     *
     * @param mensaje El mensaje a ser encapsulado.
     */
    public Mensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    /**
     * Obtiene el mensaje encapsulado.
     *
     * @return El mensaje encapsulado.
     */
    public String getMensaje() {
        return mensaje;
    }

    /**
     * Establece el mensaje encapsulado.
     *
     * @param mensaje El mensaje a ser establecido.
     */
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
}
