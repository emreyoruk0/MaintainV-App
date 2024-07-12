import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-aerospace',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './aerospace.component.html',
  styleUrl: './aerospace.component.css'
})
export class AerospaceComponent {

  description: string = "A CMMS software provides access to all necessary information for equipment maintenance. Maintenance teams can view information about sub-equipment features and numbers updated after each operation directly from this database with the help of efficient CMMS. This feature optimizes the redundancy strategy as it keeps track of all equipment components.";

  items: string[] = [
    "Meeting regulatory compliance and safety standards",
    "Lower maintenance costs, cost efficiency is maintained",
    "Creating data-driven maintenance decisions",
    "Increasing efficiency and productivity",
    "Extending the life of any equipment"
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Aerospace | Maintain-V');
    _goToTop.goToTop();
  }
}
