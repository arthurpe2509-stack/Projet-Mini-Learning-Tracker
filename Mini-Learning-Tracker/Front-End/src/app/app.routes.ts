import { Routes } from '@angular/router';
import { ListeRessource } from './component/ressources/liste-ressource/liste-ressource';
import { DetailsRessource } from './component/ressources/details-ressource/details-ressource';
import { FormRessources } from './shared/form-ressources/form-ressources';
import { ListeCategorie } from './categories/liste-categorie/liste-categorie';
import { FormCategorie } from './shared/form-categorie/form-categorie';

export const routes: Routes = [
    { path : '', component: ListeRessource },
    { path : 'ressources/new', component : FormRessources },
    { path : 'ressources/:ressourdId', component: DetailsRessource },
    { path : 'categories', component: ListeCategorie },
    { path : 'categories/new', component: FormCategorie },
];
