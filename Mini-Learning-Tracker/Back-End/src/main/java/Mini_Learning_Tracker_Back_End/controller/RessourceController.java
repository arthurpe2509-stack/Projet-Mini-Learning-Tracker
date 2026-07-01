package Mini_Learning_Tracker_Back_End.controller;


import Mini_Learning_Tracker_Back_End.entity.RessourceEntity;
import Mini_Learning_Tracker_Back_End.services.RessourceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/ressources")
public class RessourceController {

    private final RessourceService ressourceService;

    public RessourceController(RessourceService ressourceService) {
        this.ressourceService = ressourceService;
    }

    @GetMapping
    public List<RessourceEntity> getAllRessource(){
        return ressourceService.getAllRessources();
    }

    @GetMapping("/{id}")
    public RessourceEntity getRessourceByid(@PathVariable UUID id)
    {
        return ressourceService.getRessourceById(id);
    }

    @PostMapping
    public RessourceEntity postNewRessource(@RequestBody RessourceEntity newRessource) {
        return ressourceService.saveRessource(newRessource);
    }
}
