import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoToTopService } from '../../common/services/go-to-top.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ){
    _goToTop.goToTop();
    _title.setTitle('Manage All Your Maintenance Needs | Maintain-V');
  }

}
