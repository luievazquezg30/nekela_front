import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkingDayPage } from './working-day.page';

describe('WorkingDayPage', () => {
  let component: WorkingDayPage;
  let fixture: ComponentFixture<WorkingDayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
