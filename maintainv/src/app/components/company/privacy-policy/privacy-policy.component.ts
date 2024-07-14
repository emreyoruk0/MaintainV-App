import { Component } from '@angular/core';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Privacy Policy | Maintain-V');
    _goToTop.goToTop();
  }
}
