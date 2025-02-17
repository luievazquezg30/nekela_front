import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestVacationsPage } from './request-vacations.page';

describe('RequestVacationsPage', () => {
  let component: RequestVacationsPage;
  let fixture: ComponentFixture<RequestVacationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVacationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
