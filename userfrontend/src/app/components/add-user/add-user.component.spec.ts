import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserdComponent } from './add-user.component';

describe('AddUserdComponent', () => {
  let component: AddUserdComponent;
  let fixture: ComponentFixture<AddUserdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserdComponent]
    });
    fixture = TestBed.createComponent(AddUserdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
