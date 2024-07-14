import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";

@Component({
  selector: 'app-roi-calculator',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './roi-calculator.component.html',
  styleUrl: './roi-calculator.component.css'
})
export class RoiCalculatorComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('ROI Calculator | Maintain-V');
    _goToTop.goToTop();
  }
}
