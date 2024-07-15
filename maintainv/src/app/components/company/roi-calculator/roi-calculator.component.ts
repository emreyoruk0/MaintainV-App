import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-roi-calculator',
  standalone: true,
  imports: [NavigatorComponent, CommonModule, FormsModule],
  templateUrl: './roi-calculator.component.html',
  styleUrl: './roi-calculator.component.css'
})
export class RoiCalculatorComponent {
  isCalculated: boolean = false;
  platformId = inject(PLATFORM_ID);

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('ROI Calculator | Maintain-V');
    _goToTop.goToTop();
  }

  calculateROI(form: NgForm) {
    if(isPlatformBrowser(this.platformId)){
      if (form.valid) {
        console.log(form.value);
        this.isCalculated = true;
      }
    }
  }
}
