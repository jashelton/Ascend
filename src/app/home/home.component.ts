import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  types = ['Single Room', 'Full Remodel'];
  typeSelected = false;
  roomSelected = false;

  rooms = ['Bedroom', 'Bathroom', 'Kitchen', 'Living Room'];
  links = ['one', 'two', 'three', 'four'];

  constructor() { }

  ngOnInit() {
  }

  displaySettings() {
    this.typeSelected = true;
  }

  displayMaterials() {
    this.roomSelected = true;
  }

}
