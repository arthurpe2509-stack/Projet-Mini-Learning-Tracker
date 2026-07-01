package Mini_Learning_Tracker_Back_End.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class CategorieEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID categorieId;

    private String name;

    private String description;

    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }

    public UUID getCategorieId() {
        return categorieId;
    }

}
