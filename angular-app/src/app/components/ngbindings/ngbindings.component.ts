import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-ngbindings',
  templateUrl: './ngbindings.component.html',
  styleUrls: ['./ngbindings.component.css'],
})
export class NgbindingsComponent implements OnInit {
  public names: string[] = ['Amit', 'Satya', 'Ayman', 'Hari', 'Raghav'];
  contentDone = true;
  public people: Person[] = [];

  public showClass = true;

  getColor(name) {
    switch (name) {
      case 'Amit':
        return 'green';
      case 'Satya':
        return 'red';
      case 'Ayman':
        return 'blue';
      case 'Hari':
        return 'brown';
      default:
        return 'yellow';
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.people = [
      {
        name: 'Kevin',
        country: 'England',
        email: 'kevin@gmail.com',
      },
      {
        name: 'Patty',
        country: 'Australia',
        email: 'patty@gmail.com',
      },
      {
        name: 'Ricky',
        country: 'South Africa',
        email: 'ricky@gmail.com',
      },
      {
        name: 'Kapil',
        country: 'India',
        email: 'kapil@gmail.com',
      },
    ];
  }
}
