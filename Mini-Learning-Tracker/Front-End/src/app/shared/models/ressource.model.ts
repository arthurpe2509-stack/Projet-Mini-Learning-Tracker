import { Category } from "./category.model";
import { ResourceEnum } from "./ressource.enum";
import { StatusEnum } from "./status.enum";

export interface Ressource {
    ressourceId: string;
    title: string;
    description: string;
    url: string;
    typeEnum: ResourceEnum;
    statusEnum: StatusEnum;
    createdAt: Date;
    category: Category;
  }