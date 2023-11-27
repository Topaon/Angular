import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlanningService } from '../planning.service';

@Component({
  selector: 'app-recipe-choice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-choice.component.html',
  styleUrl: './recipe-choice.component.scss'
})
export class RecipeChoiceComponent {
  http!: HttpClient
  meal!: any;
  plService!: PlanningService;

  recipes!: any[];

  constructor(private router: Router, private route: ActivatedRoute, private Myhttp: HttpClient, private planningService: PlanningService) {
    this.route.paramMap.subscribe(params => {
      this.meal = history.state.meal
      this.plService = planningService
    });

    this.http = Myhttp;
  }

  ngOnInit() {
 //   var url = "http://13.53.73.156:8080/chopy/chopy-api/recipe";
    var url = "http://localhost:8080/chopy/chopy-api/recipe";
    this.http.get<any[]>(url).subscribe(data => {
      this.recipes = data
    })
  }

  chooseRecipe(recipe: any){
    const planningItem = this.plService.planning.find(row =>
      row.some(item => item.day === this.meal.day && item.meal === this.meal.meal)
    );
    if (planningItem) {
      const mealItem = planningItem.find(item => item.day === this.meal.day && item.meal === this.meal.meal);
      if (mealItem) {
        mealItem.recipe = recipe.name;
        mealItem.recipeId = recipe.id;
        mealItem.image_url = recipe.image_url;
      }
    }
    this.router.navigate(['planning'])
  }

  cancelChooseRecipe() {
    this.router.navigate(['planning'])
  }
}