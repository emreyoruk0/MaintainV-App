import { Component } from '@angular/core';
import { NavigatorComponent } from "../../../common/components/navigator/navigator.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('About Us | Maintain-V');
    _goToTop.goToTop();
  }
}
