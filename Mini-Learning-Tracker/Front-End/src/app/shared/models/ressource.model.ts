import { Category } from "./category.model";
import { ResourceEnum } from "./ressource.enum";
import { StatusEnum } from "./status.enum";

export interface Ressource {
    ressourceId: string;
    title: string;
    description: string;
    url: string;
    type: ResourceEnum;
    status: StatusEnum;
    createdAt: Date;
    category: Category;
  }