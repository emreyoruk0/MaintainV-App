import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
  @Input() titleForIndustry: string = '';
}
