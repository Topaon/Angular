import { Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { HomeComponent } from './home/home.component';
import { RecipeChoiceComponent } from './recipe-choice/recipe-choice.component';

export const routes: Routes = [
    { path: 'planning', component: PlanningComponent},
    { path: 'shoplist', component: ShoplistComponent},
    { path: 'home', component: HomeComponent},
    { path: 'recipe-choice', component: RecipeChoiceComponent}
];