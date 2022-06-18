import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculate',
  templateUrl: './bmi-calculate.component.html',
  styleUrls: ['./bmi-calculate.component.scss']
})
export class BmiCalculateComponent implements OnInit {


  result!:number;

  constructor(private storageService:StorageService) { }

  ngOnInit(): void {
  }

  bmiCalculateForm = new FormGroup({
    weight: new FormControl(null,[Validators.required,Validators.min(0)]),
    height: new FormControl(null,[Validators.required,Validators.min(0)]),
  });

  calculateBmi(){
      this.result = this.bmiCalculateForm.value.weight / (Math.pow(this.bmiCalculateForm.value.height/100,2));
  }

  public addToLocalStorage(): void {
    this.storageService.addToLocalStorage(this.bmiCalculateForm.value.weight, this.bmiCalculateForm.value.height);
  }



}
