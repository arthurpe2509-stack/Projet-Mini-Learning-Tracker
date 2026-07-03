package Mini_Learning_Tracker_Back_End.entity;

import Mini_Learning_Tracker_Back_End.entity.Enum.statusEnum;
import Mini_Learning_Tracker_Back_End.entity.Enum.typeEnum;

import java.util.UUID;

public class RessourceEntityIn {

    public RessourceEntityIn(String title, String description, String url, typeEnum type, statusEnum status, UUID categorieId) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.type = type;
        this.status = status;
        this.categorieId = categorieId;
    }

    private String title;

    private String description;

    private String url;

    private typeEnum type;

    private statusEnum status;

    private UUID categorieId;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getUrl() {
        return url;
    }

    public typeEnum getType() {
        return type;
    }

    public statusEnum getStatus() {
        return status;
    }

    public UUID getCategorieId() {
        return categorieId;
    }
}
