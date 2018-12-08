package sdaproject.server.converter;

import sdaproject.server.dto.AbstractDTO;
import sdaproject.server.entity.AbstractEntity;

import java.util.List;
import java.util.stream.Collectors;

public interface Converter<ENTITY extends AbstractEntity, DTO extends AbstractDTO> {

    ENTITY convertToEntity(DTO dto);

    DTO convertToDto(ENTITY entity);

    default List<ENTITY> convertToEntities(List<DTO> dtos) {
        return dtos.stream().map(this::convertToEntity).collect(Collectors.toList());
    }

    default List<DTO> convertToDtos(List<ENTITY> entities) {
        return entities.stream().map(this::convertToDto).collect(Collectors.toList());
    }

}
