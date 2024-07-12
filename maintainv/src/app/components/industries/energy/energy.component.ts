import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-energy',
  standalone: true,
  imports: [ IndustryComponent],
  templateUrl: './energy.component.html',
  styleUrl: './energy.component.css'
})
export class EnergyComponent {

  description: string = "An effective maintenance management helps limit power surges and maintain equipment involved in power distribution. Regular maintenance can be scheduled and costs can be tracked for each task; this will increase efficiency and reduce overall costs.";

  items: string[] = [
    "Turbines, pumps, cooling systems, transformers, gearboxes etc. Schedule periodic maintenance for energy equipment such as",
    "Keep assets productive in the face of their unique challenges.",
    "Dramatically increases the productivity of oil and gas companies.",
    "Track maintenance costs in oil and gas fields and follow up on equipment breakdown work orders.",
    "• Help refineries stay organized, eliminate unscheduled equipment repairs, increase productivity, maintain safety standards, reduce costs and respond quickly to emergencies."
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Energy | Maintain-V');
    _goToTop.goToTop();
  }
}
