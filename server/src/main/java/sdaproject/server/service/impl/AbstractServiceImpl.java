package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;
import sdaproject.server.dto.AbstractDTO;
import sdaproject.server.converter.Converter;
import sdaproject.server.entity.AbstractEntity;
import sdaproject.server.service.AbstractService;

import java.util.Collection;

public abstract class AbstractServiceImpl<ENTITY extends AbstractEntity, DTO extends AbstractDTO> implements AbstractService<ENTITY, DTO> {

    protected abstract JpaRepository<ENTITY, Long> getRepo();
    protected abstract Converter<ENTITY, DTO> getConverter();

    @Override
    @Transactional
    public DTO update(DTO dto) {
        ENTITY entity = getConverter().convertToEntity(dto);
        return getConverter().convertToDto(getRepo().save(entity));
    }

    @Override
    @Transactional(readOnly = true)
    public DTO findById(Long id) {
        ENTITY entity = getRepo().getOne(id);
        return getConverter().convertToDto(entity);
    }

    @Override
    @Transactional
    public DTO save(DTO dto) {
        ENTITY entity = getConverter().convertToEntity(dto);
        return getConverter().convertToDto(getRepo().save(entity));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        getRepo().deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<DTO> getAll() {
        return getConverter().convertToDtos(getRepo().findAll());
    }
}
