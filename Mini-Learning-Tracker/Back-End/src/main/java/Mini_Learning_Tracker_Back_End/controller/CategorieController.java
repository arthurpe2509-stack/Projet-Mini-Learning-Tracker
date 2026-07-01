package Mini_Learning_Tracker_Back_End.controller;

import Mini_Learning_Tracker_Back_End.entity.CategorieEntity;
import Mini_Learning_Tracker_Back_End.services.CategorieService;
import org.springframework.web.bind.annotation.*;

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
    public CategorieEntity postNewCategorie (@RequestBody CategorieEntity newCategorie){
        return categorieService.saveCategorie(newCategorie);
    }
}
