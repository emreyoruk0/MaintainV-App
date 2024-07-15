import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoToTopService {
  platformId = inject(PLATFORM_ID);
  constructor(
    private _router: Router
  ) { }

  goToTop() {
    if(isPlatformBrowser(this.platformId)){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  goHomeAndTop(){
    this._router.navigateByUrl('/')
        .then(() => {
        window.scrollTo(0, 0);
        });
  }
}
