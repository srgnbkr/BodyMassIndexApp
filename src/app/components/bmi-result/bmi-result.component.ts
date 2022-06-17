import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.scss'],
})
export class BmiResultComponent implements OnInit {
  @Input() result!: number;




  constructor() {}

  ngOnInit(): void {}

  getResult(): string {
    if (this.result < 18.5) {
      return  'Zayıf';
    }
    if (this.result < 25) {
      return  'Normal';
    }
    if (this.result < 30) {
      return  'Fazla Kilolu';
    }
    if (this.result > 30) {
      return 'Şişman';
    }
    if(this.result > 35){
      return 'Obez';
    }
    return '';
  }
}
