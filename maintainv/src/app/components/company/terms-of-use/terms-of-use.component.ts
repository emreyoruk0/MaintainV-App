import { Component } from '@angular/core';
import { NavigatorComponent } from '../../../common/components/navigator/navigator.component';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Terms of Use | Maintain-V');
    _goToTop.goToTop();
  }
}
