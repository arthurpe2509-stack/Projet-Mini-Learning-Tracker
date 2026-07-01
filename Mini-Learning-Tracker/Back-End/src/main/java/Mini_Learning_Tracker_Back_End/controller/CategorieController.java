package Mini_Learning_Tracker_Back_End.controller;

import Mini_Learning_Tracker_Back_End.entity.CategorieEntity;
import Mini_Learning_Tracker_Back_End.services.CategorieService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategorieController {

    private final CategorieService categorieService;

    public CategorieController(CategorieService categorieService) {
        this.categorieService = categorieService;
    }

    @GetMapping
    public List<CategorieEntity> getAllCategories(){
        return categorieService.findAllCategories();
    }

    @PostMapping
    public CategorieEntity postNewCategorie (CategorieEntity newCategorie){
        return categorieService.saveCategorie(newCategorie);
    }
}
