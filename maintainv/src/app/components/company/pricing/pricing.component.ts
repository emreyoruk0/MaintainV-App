import { Component } from '@angular/core';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NavigatorComponent, RouterLink],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  features: string[] = [
    "Work Order Management",
    "Periodic Maintenance",
    "Locations",
    "Assets",
    "Parts",
    "Vendors and Customers"
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Pricing | Maintain-V');
    _goToTop.goToTop();
  }
}
