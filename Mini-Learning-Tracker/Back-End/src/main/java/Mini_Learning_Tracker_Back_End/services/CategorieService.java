package Mini_Learning_Tracker_Back_End.services;

import Mini_Learning_Tracker_Back_End.entity.CategorieEntity;
import Mini_Learning_Tracker_Back_End.repositories.CategorieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieService {

    private final CategorieRepository categorieRepository;

    public CategorieService(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    public List<CategorieEntity> findAllCategories () {
        return categorieRepository.findAll();
    }

    public CategorieEntity saveCategorie(CategorieEntity newCategorie){
        return categorieRepository.save(newCategorie);
    }
}
