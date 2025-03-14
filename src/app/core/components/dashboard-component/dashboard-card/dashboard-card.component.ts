import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  imports: [RouterModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() route!: string;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
}
