import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../common/services/go-to-top.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService
  ) {
    _title.setTitle('Blog | Maintain-V');
    _goToTop.goToTop();
  }
}
