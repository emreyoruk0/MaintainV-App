import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-transportation',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.css'
})
export class TransportationComponent {

  description: string = "Periodic maintenance schedule can be created for all vehicles in an organization using CMMS. You can use it for facilities such as industrial engines, trucks, surface loaders and pumps.";

  items: string[] = [
    "Alerts for critical activities controlling required engine equipment.",
    "It helps to record maintenance costs according to the vehicle type, increases the efficiency of the vehicle.",
    "CMMS assists in the implementation of maintenance procedures and preventive maintenance programs."
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Transportation | Maintain-V');
    _goToTop.goToTop();
  }
}
