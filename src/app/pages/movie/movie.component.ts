import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  public years: Array<Select2OptionData> = [];

  constructor() { }

  ngOnInit() {
    for (let cont = 2019; cont >= 1900; cont--) {
      this.years.push(
        {
          id: cont.toString(),
          text: cont.toString()
        }
      );
    }
  }

}
