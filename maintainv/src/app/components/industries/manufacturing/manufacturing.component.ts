import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IndustryComponent } from "../../../common/components/industry/industry.component";
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [IndustryComponent],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.css'
})
export class ManufacturingComponent {

  description: string = "The core of an economy is the manufacturing industry. Almost all machinery and equipment used in these industries are custom made and quite expensive.";

  items: string[] = [
    "Track the average work order duration for any asset.",
    "Protect asset life and track maintenance costs.",
    "Successfully meet production targets.",
    "Meet site-specific needs.",
    "Make efficient decisions."
  ];

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Manufacturing | Maintain-V');
    _goToTop.goToTop();
  }
}
