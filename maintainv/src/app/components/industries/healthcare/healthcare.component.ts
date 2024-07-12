import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.css'
})
export class HealthcareComponent {

  description: string = "Health institutions and clinical engineering/biomedical departments and facilities can benefit from the computerized system. It includes multi-layered backup systems to ensure continuous plant operation.";

  items: string[] = [
    "A computerized maintenance management system (CMMS) or enterprise asset management (EAM) software helps to streamline all equipment, spare parts, procedures, schedules and other assets.",
    "Multiple contract and warranty management."
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Healthcare | Maintain-V');
    _goToTop.goToTop();
  }
}
