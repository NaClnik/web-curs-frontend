import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRegisterModalComponent } from './complete-register-modal.component';

describe('CompleteRegisterModalComponent', () => {
  let component: CompleteRegisterModalComponent;
  let fixture: ComponentFixture<CompleteRegisterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteRegisterModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
