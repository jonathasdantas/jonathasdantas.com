import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 
{ 
  PageNotFoundComponent,
  HeaderComponent,
  FooterComponent,
  NavbarComponent
} from "./components";

@NgModule({
  imports: [
    CommonModule
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
