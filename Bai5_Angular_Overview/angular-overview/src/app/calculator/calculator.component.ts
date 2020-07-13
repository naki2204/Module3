import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  first: number;
  second: number;
  operator = '+';
  result: number;
  constructor() { }

  firstChange(value) {
    this.first = value;
  }
  secondChange(value) {
    this.second = value;
  }
  operatorChange(value) {
    this.operator = value;
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.result = parseFloat(String(this.first)) + parseFloat(String(this.second)) ;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
    }
  }

  ngOnInit() {
  }

}
