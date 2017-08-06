import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 
{ 
  PageNotFoundComponent,
  HeaderComponent,
  FooterComponent,
  NavbarComponent
} from "./components";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
