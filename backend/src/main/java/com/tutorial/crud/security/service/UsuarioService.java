package com.tutorial.crud.security.service;

import com.tutorial.crud.security.entity.Usuario;
import com.tutorial.crud.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Clase de servicio para realizar operaciones relacionadas con la entidad Usuario.
 * Esta clase gestiona la lógica de negocio y la interacción con el repositorio UsuarioRepository.
 */
@Service
@Transactional
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    /**
     * Método para obtener un usuario por su nombre de usuario.
     *
     * @param nombreUsuario El nombre de usuario del usuario a buscar.
     * @return Un objeto Optional que contiene el usuario encontrado, si existe.
     */
    public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
        return usuarioRepository.findByNombreUsuario(nombreUsuario);
    }

    /**
     * Método para verificar si existe un usuario con un nombre de usuario específico.
     *
     * @param nombreUsuario El nombre de usuario a verificar.
     * @return true si existe un usuario con el nombre de usuario especificado, false de lo contrario.
     */
    public boolean existsByNombreUsuario(String nombreUsuario){
        return usuarioRepository.existsByNombreUsuario(nombreUsuario);
    }

    /**
     * Método para verificar si existe un usuario con un correo electrónico específico.
     *
     * @param email El correo electrónico a verificar.
     * @return true si existe un usuario con el correo electrónico especificado, false de lo contrario.
     */
    public boolean existsByEmail(String email){
        return usuarioRepository.existsByEmail(email);
    }

    /**
     * Método para guardar un usuario en la base de datos.
     *
     * @param usuario El usuario a guardar.
     */
    public void save(Usuario usuario){
        usuarioRepository.save(usuario);
    }
}
