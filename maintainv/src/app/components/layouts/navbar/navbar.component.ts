import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SettingsIconComponent } from "../../../common/components/settings-icon/settings-icon.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, SettingsIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isShow: boolean = false;
  topPosToStartShowing = 100;

  constructor(
    private _router: Router
  ){}

  goHomeAndTop(){
    this._router.navigateByUrl('/')
        .then(() => {
        window.scrollTo(0, 0);
        });
  }


  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}
