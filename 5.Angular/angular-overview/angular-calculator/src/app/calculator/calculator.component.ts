import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  operator = '+';
  result: number ;

  onFirstNumber(value) {
    this.firstNumber = Number(value);
  }
  onSecondNumber(value) {
    this.secondNumber =  Number(value);
  }
  onOperator(value) {
    this.operator = value;
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
          this.result = this.firstNumber - this.secondNumber;
          break;
      case 'x':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;
    }
  }
  constructor() { }
  ngOnInit() {
  }

}
