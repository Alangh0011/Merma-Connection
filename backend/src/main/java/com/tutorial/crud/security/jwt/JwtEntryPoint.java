package com.tutorial.crud.security.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Clase que implementa AuthenticationEntryPoint de Spring Security para manejar errores de autenticación.
 * Esta clase se utiliza para responder con un mensaje de error personalizado cuando se produce una excepción de autenticación al intentar acceder a recursos protegidos.
 */
@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {

    private final static Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

    /**
     * Método para manejar el inicio de la autenticación.
     * Se llama cuando se produce una excepción de autenticación al intentar acceder a recursos protegidos sin autenticación.
     * Responde con un mensaje de error HTTP 401 no autorizado.
     *
     * @param req La solicitud HTTP.
     * @param res La respuesta HTTP.
     * @param e   La excepción de autenticación.
     * @throws IOException      Si ocurre un error al escribir en el flujo de salida.
     * @throws ServletException Si ocurre un error durante el manejo de la solicitud.
     */
    @Override
    public void commence(HttpServletRequest req, HttpServletResponse res, AuthenticationException e) throws IOException, ServletException {
        logger.error("Error en el método commence: {}", e.getMessage());
        res.sendError(HttpServletResponse.SC_UNAUTHORIZED, "No autorizado");
    }
}
