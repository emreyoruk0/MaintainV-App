import { Component, Input } from '@angular/core';
import { NavigatorComponent } from "../navigator/navigator.component";

@Component({
  selector: 'app-industry',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './industry.component.html',
  styleUrl: './industry.component.css'
})
export class IndustryComponent {
  @Input() industryTitle: string = '';
  @Input() industryDescription: string = '';
  @Input() industryItems: string[] = [];
}
