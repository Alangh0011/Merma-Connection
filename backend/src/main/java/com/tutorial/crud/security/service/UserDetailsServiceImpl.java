package com.tutorial.crud.security.service;

import com.tutorial.crud.security.entity.Usuario;
import com.tutorial.crud.security.entity.UsuarioPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Implementación de Spring Security UserDetailsService para cargar los detalles del usuario por nombre de usuario.
 * Esta clase se utiliza para cargar los detalles del usuario desde la base de datos y construir un objeto UserDetails.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UsuarioService usuarioService;

    /**
     * Método para cargar los detalles del usuario por nombre de usuario.
     *
     * @param nombreUsuario El nombre de usuario del usuario.
     * @return Un objeto UserDetails que representa al usuario.
     * @throws UsernameNotFoundException Si no se encuentra el usuario.
     */
    @Override
    public UserDetails loadUserByUsername(String nombreUsuario) throws UsernameNotFoundException {
        Usuario usuario = usuarioService.getByNombreUsuario(nombreUsuario)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con nombre de usuario: " + nombreUsuario));
        return UsuarioPrincipal.build(usuario);
    }
}
