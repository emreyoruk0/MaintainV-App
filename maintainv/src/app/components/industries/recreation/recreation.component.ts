import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-recreation',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './recreation.component.html',
  styleUrl: './recreation.component.css'
})
export class RecreationComponent {

  description: string = "The city's parks and recreation department has the challenging task of keeping the city's park(s) in the best possible condition. Maintaining parks, fixtures, fountains, playgrounds and paved areas should always be a priority.";

  items: string[] = [
    "Implement regular periodic facility management to prevent potential problems by performing necessary inspections.",
    "Efficiently manage all key assets and monitor maintenance management processes directly from your smartphone, tablet or PC.",
    "Track supplier information, inventory levels and contractor costs in an efficient management system."
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Recreation | Maintain-V');
    _goToTop.goToTop();
  }
}
