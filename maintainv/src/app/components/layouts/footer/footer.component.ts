import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(
    public _goToTop: GoToTopService
  ){}
}
