package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sdaproject.server.entity.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByEmail(String email);

}
