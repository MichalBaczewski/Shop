package sdaproject.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class RoleEntity extends AbstractEntity {

    @Column
    private String role;

    public RoleEntity() {
    }

    public RoleEntity(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
