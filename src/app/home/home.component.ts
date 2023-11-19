import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToPlanning() {
    this.router.navigate(['planning'])
  }

  goToShoplist() {
    this.router.navigate(['shoplist'])
  }
}