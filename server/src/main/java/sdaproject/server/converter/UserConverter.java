package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.UserDTO;
import sdaproject.server.entity.UserEntity;

import java.util.stream.Collectors;

@Component
public class UserConverter implements Converter<UserEntity, UserDTO> {

    @Override
    public UserEntity convertToEntity(UserDTO dto) {
        throw new UnsupportedOperationException();
    }

    @Override
    public UserDTO convertToDto(UserEntity entity) {
        UserDTO dto = new UserDTO();

        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setLastname(entity.getLastname());
        dto.setEmail(entity.getEmail());
        dto.setRoles(entity.getRoles().stream().map(role -> role.getRole()).collect(Collectors.toList()));

        return dto;
    }
}
