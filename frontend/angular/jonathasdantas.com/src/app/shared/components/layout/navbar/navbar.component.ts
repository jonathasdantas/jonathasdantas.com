import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private opened: boolean;

  constructor() {
    this.opened = false;
  }
  
  ngOnInit() {
  }

  isOpened() {
    return this.opened;
  }

  toggle() {
    this.opened = !this.opened;
  }

}
