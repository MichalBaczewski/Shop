package sdaproject.server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import sdaproject.server.security.*;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final AuthenticationSuccessHandler authenticationSuccessHandler;
    private final AuthenticationFailureHandler authenticationFailureHandler;
    private final CustomUserDetailsService customUserDetailsService;
    private final CustomPasswordEncoder customPasswordEncoder;
    private final LogoutSuccess logoutSuccessHandler;

    public WebSecurityConfig(AuthenticationSuccessHandler authenticationSuccessHandler, AuthenticationFailureHandler authenticationFailureHandler, CustomUserDetailsService customUserDetailsService, CustomPasswordEncoder customPasswordEncoder, LogoutSuccess logoutSuccessHandler) {
        this.authenticationSuccessHandler = authenticationSuccessHandler;
        this.authenticationFailureHandler = authenticationFailureHandler;
        this.customUserDetailsService = customUserDetailsService;
        this.customPasswordEncoder = customPasswordEncoder;
        this.logoutSuccessHandler = logoutSuccessHandler;
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(customPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/**/open/**").permitAll()
                .antMatchers("/api/dictionary/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/api/login").permitAll()
                .successHandler(authenticationSuccessHandler)
                .failureHandler(authenticationFailureHandler)
                .and()
                .logout()
                .logoutUrl("/api/logout")
                .logoutSuccessHandler(logoutSuccessHandler)
                .deleteCookies("JSESSIONID");
    }

}
