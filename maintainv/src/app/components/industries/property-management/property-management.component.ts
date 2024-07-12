import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-property-management',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './property-management.component.html',
  styleUrl: './property-management.component.css'
})
export class PropertyManagementComponent {

  description: string = "Property management is widely spread and is a leading industry worldwide. CMMS's web-based applications allow you to run your property more efficiently and better serve your tenants around the world.";

  items: string[] = [
    "Maximizes value, reduces costs and increases ROI (return on investment).",
    "Track and resolve requests on work orders.",
    "Efficiently track costs associated with repairs and general maintenance.",
    "Assists in required production and maintains property management."
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Property Management | Maintain-V');
    _goToTop.goToTop();
  }
}
