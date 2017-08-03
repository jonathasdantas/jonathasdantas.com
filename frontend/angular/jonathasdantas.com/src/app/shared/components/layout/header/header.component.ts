import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sections: any [];

  constructor() {
  }

  ngOnInit() {
  }

}
