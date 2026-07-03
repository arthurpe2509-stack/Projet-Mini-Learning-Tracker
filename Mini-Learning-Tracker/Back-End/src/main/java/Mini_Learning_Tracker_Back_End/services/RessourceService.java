package Mini_Learning_Tracker_Back_End.services;

import Mini_Learning_Tracker_Back_End.entity.RessourceEntity;
import Mini_Learning_Tracker_Back_End.entity.RessourceEntityIn;
import Mini_Learning_Tracker_Back_End.repositories.CategorieRepository;
import Mini_Learning_Tracker_Back_End.repositories.RessourceRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class RessourceService {

    private final RessourceRepository ressourceRepository;
    private final CategorieRepository categorieRepository;

    public RessourceService(RessourceRepository ressourceRepository, CategorieRepository categorieRepository) {
        this.ressourceRepository = ressourceRepository;
        this.categorieRepository = categorieRepository;
    }

    public List<RessourceEntity> getAllRessources(){
        return ressourceRepository.findAll();
    }

    public RessourceEntity getRessourceById(UUID id) {
        return ressourceRepository.findRessourceEntityByRessourceId(id);
    }

    public void saveRessource(RessourceEntityIn newRessourceIn){

        RessourceEntity newRessource = new RessourceEntity();
        newRessource.setTitle(newRessourceIn.getTitle());
        newRessource.setUrl(newRessourceIn.getUrl());
        newRessource.setType(newRessourceIn.getType());
        newRessource.setStatus(newRessourceIn.getStatus());
        newRessource.setDescription(newRessourceIn.getDescription());
        newRessource.setCreatedAt(new Date());
        newRessource.setCategorie(categorieRepository.getReferenceById(newRessourceIn.getCategorieId()));

        ressourceRepository.save(newRessource);
    }
}
