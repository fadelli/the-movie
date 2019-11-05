import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public toggleMenuMobile() {
    $('.mobile-menu').animate({'width': 'toggle'}, 300);
  }

}
