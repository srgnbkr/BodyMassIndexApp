import { information } from './../../models/information';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  information=information;

  constructor() { }

  ngOnInit(): void {
  }

}
