import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
// import * as jQuery from 'jquery';

// declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    jQuery(document).ready(() => {
      // jQuery('body').hide('fast');
      // jQuery('body').css({'background-color': 'yellow', 'font-size': '200%'});
    });
  }
}
