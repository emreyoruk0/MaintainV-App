import { Component } from '@angular/core';
import { NavigatorComponent } from "../../common/components/navigator/navigator.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-learning-center',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './learning-center.component.html',
  styleUrl: './learning-center.component.css'
})
export class LearningCenterComponent {

  constructor(
    private _title: Title
  ) {
    _title.setTitle('Learning Center | Maintain-V');
   }
}
