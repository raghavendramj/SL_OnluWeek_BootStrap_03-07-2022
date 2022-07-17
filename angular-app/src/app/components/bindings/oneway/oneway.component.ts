import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css'],
})
export class OnewayComponent implements OnInit {
  ngOnInit(): void {}

  constructor() {}
  public title: string = 'Angular 10';
  public isDisabled: boolean = true;
  public emailAddress: string = 'raghav@gmail.com';

  enableUsername(): void {
    console.log('Click works!');
    this.isDisabled = !this.isDisabled;
    console.log('Value of Email Address: - ', this.emailAddress);
  }
}
