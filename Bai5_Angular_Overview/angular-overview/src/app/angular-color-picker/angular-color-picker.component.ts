import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-color-picker',
  templateUrl: './angular-color-picker.component.html',
  styleUrls: ['./angular-color-picker.component.scss']
})
export class AngularColorPickerComponent implements OnInit {

  background = '#00e067';

  constructor() { }

  onChange(value) {
    this.background = value;
  }

  ngOnInit() {
  }

}
