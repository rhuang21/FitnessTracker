package com.exercisetracker.fullstackbackend.repository;

import com.exercisetracker.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
