import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planning-item.component.html',
  styleUrl: './planning-item.component.scss'
})
export class PlanningItemComponent {
  constructor(private router: Router) {}

  @Input() day: any;

  ngOnInit() {
    
  }

  chooseRecipe(meal: any){
    this.router.navigate(["recipe-choice"], { state: { meal: meal } })
  }
}