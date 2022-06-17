import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control:FormControl | any;
  @Input() label!:string;
  @Input() type!:string;
  @Input() placeholder!:string;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors(){
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }

}
