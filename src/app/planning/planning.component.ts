import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningItemComponent } from '../planning-item/planning-item.component';
import { PlanningService } from '../planning.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, PlanningItemComponent],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss'
})
export class PlanningComponent {
  planning: any[][];
  constructor(private planningService: PlanningService, private router: Router) {
    this.planning = planningService.planning
  }

  ngOnInit() {
    
  }

  goHome() {this.router.navigate(["home"])}
  goShoplist() {this.router.navigate(["shoplist"])}
  
}