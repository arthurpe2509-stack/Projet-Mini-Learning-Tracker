package Mini_Learning_Tracker_Back_End.services;

import Mini_Learning_Tracker_Back_End.entity.RessourceEntity;
import Mini_Learning_Tracker_Back_End.repositories.RessourceRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class RessourceService {

    private RessourceRepository ressourceRepository;

    public RessourceEntity getRessourceById(UUID id) {
        return ressourceRepository.findRessourceEntityByRessourceId(id);
    }

    public RessourceEntity saveRessource(RessourceEntity newRessource){
      return ressourceRepository.save(newRessource);
    }
}
