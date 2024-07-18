import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { IsValidDirective } from '../../../common/directives/is-valid.directive';
import intlTelInput from 'intl-tel-input';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, IsValidDirective],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  platformId = inject(PLATFORM_ID);

  constructor(
    private _title: Title
  ) {
    _title.setTitle('Signup | Maintain-V');
  }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
      const inputE = document.querySelector("#phonee");
      if(inputE instanceof HTMLInputElement){
        intlTelInput(inputE, {
          initialCountry: "US",
          separateDialCode: true,
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.5.0/build/js/utils.js",
        });
      }
    }
  }

  isPasswordShow(passwordInput: any) {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    }
    else {
      passwordInput.type = 'password';
    }
  }
}
