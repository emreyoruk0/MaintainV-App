import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-icon.component.html',
  styleUrl: './settings-icon.component.css'
})
export class SettingsIconComponent {
  @Input() isRotate: boolean = false;
}
