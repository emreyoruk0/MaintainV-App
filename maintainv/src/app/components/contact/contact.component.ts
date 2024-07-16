import { Component } from '@angular/core';
import { NavigatorComponent } from "../../common/components/navigator/navigator.component";
import { FormsModule, NgForm } from '@angular/forms';
import { IsValidDirective } from '../../common/directives/is-valid.directive';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../common/services/go-to-top.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavigatorComponent, FormsModule, IsValidDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Contact | Maintain-V');
    _goToTop.goToTop();
   }

  contact(form: NgForm) {
    console.log(form.value);
  }
}
