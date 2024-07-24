import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";
import { CommonModule } from '@angular/common';
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

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('ROI Calculator | Maintain-V');
    _goToTop.goToTop();
  }

  @ViewChild('machineNumber', { static: false }) machineNumber!: ElementRef<HTMLInputElement>;
  @ViewChild('dailyHour', { static: false }) dailyHour!: ElementRef<HTMLInputElement>;
  @ViewChild('workingDayNumber', { static: false }) workingDayNumber!: ElementRef<HTMLInputElement>;
  @ViewChild('hourlyCost', { static: false }) hourlyCost!: ElementRef<HTMLInputElement>;
  @ViewChild('totalMoney', { static: false }) totalMoney!: ElementRef<HTMLInputElement>;
  @ViewChild('employeeCost', { static: false }) employeeCost!: ElementRef<HTMLInputElement>;
  @ViewChild('employeePiece', { static: false }) employeePiece!: ElementRef<HTMLInputElement>;
  @ViewChild('breakTime', { static: false }) breakTime!: ElementRef<HTMLInputElement>;
  @ViewChild('downTime', { static: false }) downTime!: ElementRef<HTMLInputElement>;
  @ViewChild('electricCost', { static: false }) electricCost!: ElementRef<HTMLInputElement>;

  calculateROI(form: NgForm) {
      if (form.valid) {
        console.log(form.value);
        this.isCalculated = true;
      }
      else {
        if(this.machineNumber.nativeElement.value === ''){
          this.machineNumber.nativeElement.classList.add('is-invalid');
        }
        if(this.dailyHour.nativeElement.value === ''){
          this.dailyHour.nativeElement.classList.add('is-invalid');
        }
        if(this.workingDayNumber.nativeElement.value === ''){
          this.workingDayNumber.nativeElement.classList.add('is-invalid');
        }
        if(this.hourlyCost.nativeElement.value === ''){
          this.hourlyCost.nativeElement.classList.add('is-invalid');
        }
        if(this.totalMoney.nativeElement.value === ''){
          this.totalMoney.nativeElement.classList.add('is-invalid');
        }
        if(this.employeeCost.nativeElement.value === ''){
          this.employeeCost.nativeElement.classList.add('is-invalid');
        }
        if(this.employeePiece.nativeElement.value === ''){
          this.employeePiece.nativeElement.classList.add('is-invalid');
        }
        if(this.breakTime.nativeElement.value === ''){
          this.breakTime.nativeElement.classList.add('is-invalid');
        }
        if(this.downTime.nativeElement.value === ''){
          this.downTime.nativeElement.classList.add('is-invalid');
        }
        if(this.electricCost.nativeElement.value === ''){
          this.electricCost.nativeElement.classList.add('is-invalid');
        }
      }
  }
}
