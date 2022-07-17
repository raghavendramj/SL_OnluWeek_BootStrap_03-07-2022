import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  inputMsg: string = 'I am PARENT Component!';
  msgFromChild: string = '';

  receiveMsgFromChild(data){
    console.log("Data Received ", data);
    this.msgFromChild = data;
  }
}
