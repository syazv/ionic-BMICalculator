import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight:number = 70
  height:number = 170
  bmi:number = 0
  message:string = ""

  constructor() {
    this.bmi = this.roundTo(this.bmi, 2);
  }
  
  roundTo(num: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  }

  calculationBMI() {
    this.bmi = Math.round(this.weight / Math.pow((this.height/100), 2))
    if(this.bmi >= 18.5 && this.bmi <= 24.9){
      this.message = "Normal"
    }
    else if (this.bmi >= 25 && this.bmi <= 29.9){
      this.message = "Overweight"
    }
    else if (this.bmi >= 30 && this.bmi <= 39.9){
      this.message = "Obese"
    }
    else if (this.bmi >= 40){
      this.message = "Morbidly Obese"
    }
    else{
      this.message = "Underweight"
    }
  }
}
