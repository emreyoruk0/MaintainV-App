import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GoToTopService } from '../../../../../common/services/go-to-top.service';
import { NavigatorComponent } from "../../../../../common/components/navigator/navigator.component";
import { BlogsService } from '../../services/blogs.service';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../pipes/search.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavigatorComponent, RouterLink, SearchPipe, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  search: string = "";

  constructor(
    private _title: Title,
    private _goToTop: GoToTopService,
    public _blogsService: BlogsService
  ) {
    _title.setTitle('Blog | Maintain-V');
    _goToTop.goToTop();
  }
}
