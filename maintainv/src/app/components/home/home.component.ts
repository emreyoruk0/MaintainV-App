import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoToTopService } from '../../common/services/go-to-top.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private _goToTop: GoToTopService
  ){
    _goToTop.goToTop();
  }

}
