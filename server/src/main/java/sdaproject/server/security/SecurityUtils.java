package sdaproject.server.security;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import sdaproject.server.entity.UserEntity;

import java.util.Optional;

@Component
public class SecurityUtils {

    public Optional<UserEntity> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return Optional.ofNullable(authentication instanceof AnonymousAuthenticationToken ? null : (UserEntity) authentication.getPrincipal());
    }
}