import { Component } from '@angular/core';
import { NavigatorComponent } from "../../common/components/navigator/navigator.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  constructor(
    private _title: Title
  ){
    _title.setTitle('Features | Maintain-V');
  }

}
