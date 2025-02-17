import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AdministrativeActasComponent } from './administrative-actas.component';


describe('AdministrativeActasComponent ', () => {
  let component: AdministrativeActasComponent ;
  let fixture: ComponentFixture<AdministrativeActasComponent >;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeActasComponent  ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativeActasComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
