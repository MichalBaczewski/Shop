package sdaproject.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "product_category")
//@SequenceGenerator(name = "idGenerator", sequenceName = "public.category_id_seq")
public class ProductCategoryEntity extends AbstractEntity {

    @Column
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
