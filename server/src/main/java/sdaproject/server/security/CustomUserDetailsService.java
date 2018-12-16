package sdaproject.server.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import sdaproject.server.entity.UserEntity;
import sdaproject.server.repository.UserRepository;

import java.util.Optional;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<UserEntity> optionalUsers = userRepository.findByEmail(email);
//        return new CustomUserDetails(optionalUsers.get());
        return optionalUsers.map(userEntity -> new CustomUserDetails(userEntity)).orElseThrow(()-> new UsernameNotFoundException("Email not found"));
    }
}