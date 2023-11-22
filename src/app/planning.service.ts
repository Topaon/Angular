import { Injectable } from '@angular/core';

interface Planning_item {
  day: string;
  meal: String;
  recipe: String;
  recipeId: String;
  image_url: String;
}

@Injectable({
  providedIn: 'root'
})

export class PlanningService {
  public planning: Planning_item[][] = [
    [{ day: "lundi", meal: "matin", recipe: "", recipeId: "", image_url: "" }, { day: "lundi", meal: "midi", recipe: "", recipeId: "", image_url: "" }, { day: "lundi", meal: "soir", recipe: "", recipeId: "", image_url: "" }],
    [{ day: "mardi", meal: "matin", recipe: "", recipeId: "", image_url: "" }, { day: "mardi", meal: "midi", recipe: "", recipeId: "", image_url: "" }, { day: "mardi", meal: "soir", recipe: "", recipeId: "", image_url: "" }],
    [{ day: "mercredi", meal: "matin", recipe: "", recipeId: "", image_url: "" }, { day: "mercredi", meal: "midi", recipe: "", recipeId: "", image_url: "" }, { day: "mercredi", meal: "soir", recipe: "", recipeId: "", image_url: "" }],
    [{ day: "jeudi", meal: "matin", recipe: "", recipeId: "", image_url: "" }, { day: "jeudi", meal: "midi", recipe: "", recipeId: "", image_url: "" }, { day: "jeudi", meal: "soir", recipe: "", recipeId: "", image_url: "" }],
    [{ day: "vendredi", meal: "matin", recipe: "", recipeId: "", image_url: "" }, { day: "vendredi", meal: "midi", recipe: "", recipeId: "", image_url: "" }, { day: "vendredi", meal: "soir", recipe: "", recipeId: "", image_url: "" }],
    [{ day: "samedi", meal: "matin", recipe: "", recipeId: "", image_url: "" }, { day: "samedi", meal: "midi", recipe: "", recipeId: "", image_url: "" }, { day: "samedi", meal: "soir", recipe: "", recipeId: "", image_url: "" }],
    [{ day: "dimanche", meal: "matin", recipe: "", recipeId: "", image_url: "" }, { day: "dimanche", meal: "midi", recipe: "", recipeId: "", image_url: "" }, { day: "dimanche", meal: "soir", recipe: "", recipeId: "", image_url: "" }]
  ];
}