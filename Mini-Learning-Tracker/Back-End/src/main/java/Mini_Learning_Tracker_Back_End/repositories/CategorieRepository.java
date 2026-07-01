package Mini_Learning_Tracker_Back_End.repositories;

import Mini_Learning_Tracker_Back_End.entity.CategorieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CategorieRepository extends JpaRepository<CategorieEntity, UUID> {
}
