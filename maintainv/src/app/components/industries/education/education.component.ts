import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  description: string = "In any training organization, a well-defined CMMS system can help streamline facilities and maintenance management.";

  items: string[] = [
    "Helps maintain school buildings and administrative offices, conduct inspections, and monitor assets, labor and parts.",
    "Enhances the overall student experience and helps colleges and universities gain a competitive advantage.",
    "Accept requests and create work orders automatically.",
    "Efficiently monitor, compile and report all requests."
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Education | Maintain-V');
    _goToTop.goToTop();
  }
}
