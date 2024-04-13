package com.tutorial.crud.security.service;

import com.tutorial.crud.security.entity.Rol;
import com.tutorial.crud.security.enums.RolNombre;
import com.tutorial.crud.security.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Clase de servicio para realizar operaciones relacionadas con la entidad Rol.
 * Esta clase gestiona la lógica de negocio y la interacción con el repositorio RolRepository.
 */
@Service
@Transactional
public class RolService {

    @Autowired
    RolRepository rolRepository;

    /**
     * Método para obtener un rol por su nombre de rol.
     *
     * @param rolNombre El nombre del rol a buscar.
     * @return Un objeto Optional que contiene el rol encontrado, si existe.
     */
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return rolRepository.findByRolNombre(rolNombre);
    }

    /**
     * Método para guardar un rol en la base de datos.
     *
     * @param rol El rol a guardar.
     */
    public void save(Rol rol){
        rolRepository.save(rol);
    }
}
