import { Component } from '@angular/core';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-government-organizations',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './government-organizations.component.html',
  styleUrl: './government-organizations.component.css'
})
export class GovernmentOrganizationsComponent {

  description: string = "Government organizations can benefit from maintenance management improvement by protecting assets, ensuring equipment is available, and staying compliant. A secure system and trouble-free maintenance will save time and money.";

  items: string[] = [
    "Follow-up of maintenance costs",
    "Effectively reducing downtime",
    "Budgeting resources wisely",
    "Advance care planning",
    "Efficient planning for the future"
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Government Organizations | Maintain-V');
    _goToTop.goToTop();
  }
}
