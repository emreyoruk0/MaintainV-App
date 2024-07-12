import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoToTopService {
  platformId = inject(PLATFORM_ID);
  constructor() { }
  goToTop() {
    if(isPlatformBrowser(this.platformId)){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
