import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbindingsComponent } from './ngbindings.component';

describe('NgbindingsComponent', () => {
  let component: NgbindingsComponent;
  let fixture: ComponentFixture<NgbindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
