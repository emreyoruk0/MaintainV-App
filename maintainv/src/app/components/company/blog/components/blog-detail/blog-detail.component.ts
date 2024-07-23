import { Component, inject, PLATFORM_ID } from '@angular/core';
import { NavigatorComponent } from "../../../../../common/components/navigator/navigator.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogModel } from '../../models/blog.model';
import { BlogsService } from '../../services/blogs.service';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [NavigatorComponent, RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  platformId = inject(PLATFORM_ID);

  blogUrl: string = '';
  selectedBlog: BlogModel | undefined = new BlogModel();
  blogs: BlogModel[] = [];

  constructor(
    private _title: Title,
    private _router: Router,
    private _blogsService: BlogsService,
    private _activated: ActivatedRoute
  ){
    this.blogs = this._blogsService.blogs;
    this._activated.params.subscribe(res => {
      this.blogUrl = res["value"];
      this.findBlogByUrl(this.blogUrl);
    });
    this.changeBlogPage(this.selectedBlog);
  }

  changeBlogPage(blog: BlogModel | undefined){
    this._router.navigateByUrl(`/blog/${blog?.url}`);
    this._title.setTitle(`${blog?.title} | Maintain-V`);
    if(isPlatformBrowser(this.platformId)){
      window.scrollTo(0, 0);
    }
  }

  findBlogByUrl(url: string){
    this.selectedBlog = this.blogs.find(bl => bl.url === url);
  }
}
