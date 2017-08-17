import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared";
import { PageNotFoundComponent } from "./shared/components";

import { AboutModule } from "./about/about.module";
import { WorkModule } from "./work/work.module";
import { BlogModule } from "./blog/blog.module";
import { AdminModule } from "./admin/admin.module";

const appRoutes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AboutModule,
    WorkModule,
    BlogModule,
    SharedModule,
    AdminModule
  ],
  providers: [],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
