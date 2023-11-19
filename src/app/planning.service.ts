import { Injectable } from '@angular/core';

interface Planning_item {
  day: string;
  meal: String;
  recipe: String;
  recipeId: String;
}

@Injectable({
  providedIn: 'root'
})

export class PlanningService {
  public planning: Planning_item[][] = [
    [{ day: "lundi", meal: "matin", recipe: "", recipeId: "" }, { day: "lundi", meal: "midi", recipe: "", recipeId: "" }, { day: "lundi", meal: "soir", recipe: "", recipeId: "" }],
    [{ day: "mardi", meal: "matin", recipe: "", recipeId: "" }, { day: "mardi", meal: "midi", recipe: "", recipeId: "" }, { day: "mardi", meal: "soir", recipe: "", recipeId: "" }],
    [{ day: "mercredi", meal: "matin", recipe: "", recipeId: "" }, { day: "mercredi", meal: "midi", recipe: "", recipeId: "" }, { day: "mercredi", meal: "soir", recipe: "", recipeId: "" }],
    [{ day: "jeudi", meal: "matin", recipe: "", recipeId: "" }, { day: "jeudi", meal: "midi", recipe: "", recipeId: "" }, { day: "jeudi", meal: "soir", recipe: "", recipeId: "" }],
    [{ day: "vendredi", meal: "matin", recipe: "", recipeId: "" }, { day: "vendredi", meal: "midi", recipe: "", recipeId: "" }, { day: "vendredi", meal: "soir", recipe: "", recipeId: "" }],
    [{ day: "samedi", meal: "matin", recipe: "", recipeId: "" }, { day: "samedi", meal: "midi", recipe: "", recipeId: "" }, { day: "samedi", meal: "soir", recipe: "", recipeId: "" }],
    [{ day: "dimanche", meal: "matin", recipe: "", recipeId: "" }, { day: "dimanche", meal: "midi", recipe: "", recipeId: "" }, { day: "dimanche", meal: "soir", recipe: "", recipeId: "" }]
  ];
}