import { Component } from '@angular/core';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-delivery-and-return-notice',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './delivery-and-return-notice.component.html',
  styleUrl: './delivery-and-return-notice.component.css'
})
export class DeliveryAndReturnNoticeComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Delivery and Return Notice | Maintain-V');
    _goToTop.goToTop();
  }
}
