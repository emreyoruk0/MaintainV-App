import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsIconComponent } from "../../../common/components/settings-icon/settings-icon.component";
import { GoToTopService } from '../../../common/services/go-to-top.service';
import { LinkModel } from '../../../common/models/link.model';
import { LinkService } from '../../../common/services/link.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, SettingsIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled: boolean = false;
  topPosToStartShowing = 100;

  isIndustriesBtnClicked: boolean = false;
  isSourcesBtnClicked: boolean = false;

  industryLinks: LinkModel[] = [];
  sourceLinks: LinkModel[] = [];

  constructor(
    public _goToTop: GoToTopService,
    private _linkService: LinkService
  ){
    this.industryLinks = this._linkService.industryLinks;
    this.sourceLinks = this._linkService.sourceLinks;
  }


  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  clickIndustriesBtn() {
    this.isIndustriesBtnClicked = !this.isIndustriesBtnClicked;
    this.isSourcesBtnClicked = false;
  }

  clickSourcesBtn() {
    this.isSourcesBtnClicked = !this.isSourcesBtnClicked;
    this.isIndustriesBtnClicked = false;
  }


  goHomeAndCloseDropdowns() {
    this._goToTop.goHomeAndTop()
    this.isIndustriesBtnClicked = false;
    this.isSourcesBtnClicked = false;
  }
}
