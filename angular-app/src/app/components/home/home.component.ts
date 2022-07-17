import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  details: string = 'This is all about home component';
  myEmail: string = 'johndoe@gmail.com';
  isDisabled: boolean = true;
  bolderText: string = 'makeItBold';
  multipleClasses = ['italicAndBold', 'blueColor'];
  applyBlue: boolean = true;
  myStyle: string = 'color:green; font-size: 30px';
  applyColor : boolean = false;

  ngOnInit(): void {}

  
}
