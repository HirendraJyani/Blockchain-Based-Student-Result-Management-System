import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterFormListComponent } from './semester-form-list.component';

describe('SemesterFormListComponent', () => {
  let component: SemesterFormListComponent;
  let fixture: ComponentFixture<SemesterFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
