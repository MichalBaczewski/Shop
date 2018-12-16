package sdaproject.server.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.converter.UserConverter;
import sdaproject.server.dto.UserDTO;
import sdaproject.server.security.SecurityUtils;

@RestController
@RequestMapping("/api")
public class AuthResource {

    private final SecurityUtils securityUtils;
    private final UserConverter userConverter;

    public AuthResource(SecurityUtils securityUtils, UserConverter userConverter) {
        this.securityUtils = securityUtils;
        this.userConverter = userConverter;
    }

    @GetMapping("/logged-user-info")
    public UserDTO getLoggedUserInfo() {
        return securityUtils.getCurrentUser().map(userConverter::convertToDto).orElse(null);
    }

}
