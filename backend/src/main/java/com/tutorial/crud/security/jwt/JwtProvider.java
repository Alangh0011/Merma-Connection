package com.tutorial.crud.security.jwt;

import com.tutorial.crud.security.entity.UsuarioPrincipal;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Clase que proporciona funcionalidad para generar, validar y obtener información de tokens JWT (JSON Web Tokens).
 * Esta clase se encarga de generar tokens JWT basados en la autenticación del usuario, validar la autenticidad y vigencia de los tokens,
 * y obtener información de usuario desde un token JWT.
 */
@Component
public class JwtProvider {
    private final static Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private int expiration;

    /**
     * Método para generar un token JWT basado en la autenticación del usuario.
     *
     * @param authentication La información de autenticación del usuario.
     * @return Un token JWT generado.
     */
    public String generateToken(Authentication authentication){
        UsuarioPrincipal usuarioPrincipal = (UsuarioPrincipal) authentication.getPrincipal();
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expiration * 1000);

        return Jwts.builder()
                .setSubject(usuarioPrincipal.getUsername())
                .claim("roles", usuarioPrincipal.getAuthorities()) // Agregar los roles como una lista de autoridades
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    /**
     * Método para obtener el nombre de usuario desde un token JWT.
     *
     * @param token El token JWT.
     * @return El nombre de usuario extraído del token.
     */
    public String getNombreUsuarioFromToken(String token){
        return Jwts.parser()
                .setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    /**
     * Método para validar la autenticidad y vigencia de un token JWT.
     *
     * @param token El token JWT a validar.
     * @return true si el token es válido, false de lo contrario.
     */
    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        }catch (MalformedJwtException e){
            logger.error("Token mal formado");
        }catch (UnsupportedJwtException e){
            logger.error("Token no soportado");
        }catch (ExpiredJwtException e){
            logger.error("Token expirado");
        }catch (IllegalArgumentException e){
            logger.error("Token vacío");
        }catch (SignatureException e){
            logger.error("Falla en la firma");
        }
        return false;
    }
}
