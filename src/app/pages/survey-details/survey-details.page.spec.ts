import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyDetailsPage } from './survey-details.page';

describe('SurveyDetailsPage', () => {
  let component: SurveyDetailsPage;
  let fixture: ComponentFixture<SurveyDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
