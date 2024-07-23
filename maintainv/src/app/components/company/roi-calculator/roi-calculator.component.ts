import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IsValidDirective } from '../../../common/directives/is-valid.directive';

@Component({
  selector: 'app-roi-calculator',
  standalone: true,
  imports: [NavigatorComponent, CommonModule, FormsModule, IsValidDirective],
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
      else {
        let machineNumber = document.getElementById('machineNumber') as HTMLInputElement;
        if(machineNumber?.value === ''){
          machineNumber?.classList.add('is-invalid');
        }

        let dailyHour = document.getElementById('dailyHour') as HTMLInputElement;
        if(dailyHour?.value === ''){
          dailyHour?.classList.add('is-invalid');
        }

        let workingDayNumber = document.getElementById('workingDayNumber') as HTMLInputElement;
        if(workingDayNumber?.value === ''){
          workingDayNumber?.classList.add('is-invalid');
        }

        let hourlyCost = document.getElementById('hourlyCost') as HTMLInputElement;
        if(hourlyCost?.value === ''){
          hourlyCost?.classList.add('is-invalid');
        }

        let totalMoney = document.getElementById('totalMoney') as HTMLInputElement;
        if(totalMoney?.value === ''){
          totalMoney?.classList.add('is-invalid');
        }

        let employeeCost = document.getElementById('employeeCost') as HTMLInputElement;
        if(employeeCost?.value === ''){
          employeeCost?.classList.add('is-invalid');
        }

        let employeePiece = document.getElementById('employeePiece') as HTMLInputElement;
        if(employeePiece?.value === ''){
          employeePiece?.classList.add('is-invalid');
        }

        let breakTime = document.getElementById('breakTime') as HTMLInputElement;
        if(breakTime?.value === ''){
          breakTime?.classList.add('is-invalid');
        }

        let downTime = document.getElementById('downTime') as HTMLInputElement;
        if(downTime?.value === ''){
          downTime?.classList.add('is-invalid');
        }

        let electricCost = document.getElementById('electricCost') as HTMLInputElement;
        if(electricCost?.value === ''){
          electricCost?.classList.add('is-invalid');
        }
      }
    }
  }
}
