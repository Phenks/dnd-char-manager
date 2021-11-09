import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersEntryComponent } from './entry.component';

describe('EntryComponent', () => {
  let component: CharactersEntryComponent;
  let fixture: ComponentFixture<CharactersEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersEntryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
