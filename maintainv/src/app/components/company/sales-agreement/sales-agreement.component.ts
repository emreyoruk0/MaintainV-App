import { Component } from '@angular/core';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-sales-agreement',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './sales-agreement.component.html',
  styleUrl: './sales-agreement.component.css'
})
export class SalesAgreementComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Distance Sales Agreement | Maintain-V');
    _goToTop.goToTop();
  }
}
