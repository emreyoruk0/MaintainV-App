import { Component } from '@angular/core';
import { NavigatorComponent } from "../../common/components/navigator/navigator.component";
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../common/services/go-to-top.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ){
    _title.setTitle('Features | Maintain-V');
    _goToTop.goToTop();
  }

}
