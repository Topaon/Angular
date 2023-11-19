import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PlanningService } from '../planning.service';
import { HttpClient } from '@angular/common/http';

interface Recipe {
  ingredients: Ingredient[];
}

interface Ingredient {
  id: number;
  quantity: number;
  product: Product
}

interface Product {
  id: number;
  description: String;
  unit: String;
}

@Component({
  selector: 'app-shoplist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoplist.component.html',
  styleUrl: './shoplist.component.scss'
})
export class ShoplistComponent {
  shoplist: Ingredient[] = [];
  http!: HttpClient;
  constructor(private router: Router, private planningService: PlanningService, private Myhttp: HttpClient) {
    this.http = Myhttp;
    this.buildShoplist()
  }

  goHome() {this.router.navigate(["home"])}

  goPlanning() {this.router.navigate(["planning"])}

  buildShoplist() {
    for(var x in this.planningService.planning){
      for(var y in this.planningService.planning[x]) {
        var recipe = this.planningService.planning[x][y]
        if(recipe.recipe) {
          var url = "http://localhost:8080/chopy/chopy-api/recipe/" + recipe.recipeId
          console.log(url)
          this.http.get<Recipe>(url).subscribe(data => {
            for(let x of data.ingredients) {

              const ing = this.shoplist.find(ing => ing.id === x.id)
              if(ing) {
                ing.quantity += + x.quantity;
              } else {
                this.shoplist.push(x)
              }
            }
          })
        }
      }
    }
  }
}