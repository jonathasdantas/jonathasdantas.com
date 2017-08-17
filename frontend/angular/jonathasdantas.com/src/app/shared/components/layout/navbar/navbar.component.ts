import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private opened: boolean;
  private suffix: string;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.opened = false;
    this.suffix = '.com';
  }
  
  ngOnInit() {
    if (this.document.location.hostname.indexOf('.me') > -1) {
      this.suffix = '.me';
    }
  }

  isOpened() {
    return this.opened;
  }

  toggle() {
    this.opened = !this.opened;
  }

  getSuffix() {
    return this.suffix;
  }

}
