package com.tutorial.crud.security.repository;

import com.tutorial.crud.security.entity.Rol;
import com.tutorial.crud.security.enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Interfaz que define los métodos de acceso a datos para la entidad Rol.
 * Esta interfaz extiende la interfaz Spring Data JpaRepository para proporcionar métodos CRUD básicos para la entidad Rol.
 */
@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {

    /**
     * Método para encontrar un rol por su nombre de rol.
     *
     * @param rolNombre El nombre del rol a buscar.
     * @return Un objeto Optional que contiene el rol encontrado, si existe.
     */
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
