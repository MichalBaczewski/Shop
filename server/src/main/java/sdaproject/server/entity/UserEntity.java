package sdaproject.server.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "shop_user")
public class UserEntity extends AbstractEntity {

    @Column
    private String email;
    private String password;
    private String name;
    private String lastname;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id",
            referencedColumnName = "id"))

    private List<RoleEntity> roles;

    public UserEntity() {
    }

    public UserEntity(UserEntity user) {
        setId(user.getId());
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.name = user.getName();
        this.lastname = user.getLastname();
        this.roles = user.getRoles();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }
}
