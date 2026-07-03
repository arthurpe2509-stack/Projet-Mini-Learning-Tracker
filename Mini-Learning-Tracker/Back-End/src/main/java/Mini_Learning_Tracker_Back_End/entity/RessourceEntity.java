package Mini_Learning_Tracker_Back_End.entity;

import Mini_Learning_Tracker_Back_End.entity.Enum.statusEnum;
import Mini_Learning_Tracker_Back_End.entity.Enum.typeEnum;
import jakarta.persistence.*;


import java.util.Date;
import java.util.UUID;

@Entity
public class RessourceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID ressourceId;


    private String title;

    private String description;

    private String url;

    private typeEnum type;

    private statusEnum status;

    private Date createdAt;

    @ManyToOne
    @JoinColumn(name = "categorie_id")
    private CategorieEntity categorie;

    public CategorieEntity getCategorie() {
        return categorie;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public statusEnum getStatus() {
        return status;
    }

    public typeEnum getType() {
        return type;
    }

    public String getUrl() {
        return url;
    }

    public String getDescription() {
        return description;
    }

    public String getTitle() {
        return title;
    }

    public UUID getRessourceId() {
        return ressourceId;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setRessourceId(UUID ressourceId) {
        this.ressourceId = ressourceId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setType(typeEnum type) {
        this.type = type;
    }

    public void setStatus(statusEnum status) {
        this.status = status;
    }

    public void setCategorie(CategorieEntity categorie) {
        this.categorie = categorie;
    }
}
