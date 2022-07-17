import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input()
  childMsg: string;

  redColor: string = 'redColoredStyle';

  @Output()
  childMsgEvent: EventEmitter<string> = new EventEmitter();
  msgToParent = '';

  sendMyMsgToParent(){
    this.childMsgEvent.emit(this.msgToParent);
  }

  constructor() {}

  ngOnInit(): void {}
}
