import { Component } from '@angular/core';
import { NavigatorComponent } from "../../../../../common/components/navigator/navigator.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogModel } from '../../models/blog.model';
import { BlogsService } from '../../services/blogs.service';
import { GoToTopService } from '../../../../../common/services/go-to-top.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [NavigatorComponent, RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  blogUrl: string = '';
  selectedBlog: BlogModel | undefined = new BlogModel();
  blogs: BlogModel[] = [];

  constructor(
    private _title: Title,
    private _blogsService: BlogsService,
    private _goToTop: GoToTopService,
    private _activated: ActivatedRoute
  ){
    this.blogs = this._blogsService.blogs;
    this._activated.params.subscribe(res => {
      this.blogUrl = res["value"];
      this.findBlogByUrl(this.blogUrl);
    });
    this._goToTop.goToTop();
    this._title.setTitle(`${this.selectedBlog?.title} | Maintain-V`);
  }

  findBlogByUrl(url: string){
    this.selectedBlog = this.blogs.find(a => a.url === url);
  }
}
