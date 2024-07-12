import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-hospitality',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './hospitality.component.html',
  styleUrl: './hospitality.component.css'
})
export class HospitalityComponent {

  description: string = "Travel and accommodation are some of the services we use occasionally. As hospitality is a large industry, it is not just about providing services; it goes far beyond that. Hotels and resorts can use CMMS software to store information about rooms, floors, buildings and equipment.";

  items: string[] = [
    "Provide efficient customer service and track maintenance costs.",
    "Periodic maintenance procedures can be established for HVAC units and generators to prevent future failures."
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Hospitality | Maintain-V');
    _goToTop.goToTop();
  }
}
