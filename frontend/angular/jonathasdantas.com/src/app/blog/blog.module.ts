import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule, Routes } from "@angular/router";

const blogRoutes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes),
    CommonModule
  ],
  declarations: [
    BlogComponent,
  ]
})
export class BlogModule { }
