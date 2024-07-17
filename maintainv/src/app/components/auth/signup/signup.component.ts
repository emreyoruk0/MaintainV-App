import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { IsValidDirective } from '../../../common/directives/is-valid.directive';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, IsValidDirective],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(
    private _title: Title
  ) {
    _title.setTitle('Signup | Maintain-V');
  }


  isPasswordShow(passwordInput: any, closedEye: any, openEye: any) {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      closedEye.style.display = "none";
      openEye.style.display = "inline-block";
    }
    else {
      passwordInput.type = 'password';
      closedEye.style.display = "inline-block";
      openEye.style.display = "none";
    }
  }
}
