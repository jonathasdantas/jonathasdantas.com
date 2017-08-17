import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from './post-list/post-list.component';

const blogRoutes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: PostListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes),
    CommonModule
  ],
  declarations: [
    BlogComponent,
    PostListComponent,
  ]
})
export class BlogModule { }
