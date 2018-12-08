package sdaproject.server.service;

import sdaproject.server.dto.AbstractDTO;
import sdaproject.server.entity.AbstractEntity;

import java.util.Collection;

public interface AbstractService<ENTITY extends AbstractEntity, DTO extends AbstractDTO> {
    DTO update(DTO dto);
    DTO findById(Long id);
    DTO save(DTO entity);
    void delete(Long id);
    Collection<DTO> getAll();
}
