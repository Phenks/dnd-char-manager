import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewCharComponent;
  let fixture: ComponentFixture<NewCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCharComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
