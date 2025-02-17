import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SuggestionBoxComponent } from './suggestion-box.component';


describe('SuggestionBoxComponent ', () => {
  let component: SuggestionBoxComponent ;
  let fixture: ComponentFixture<SuggestionBoxComponent >;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionBoxComponent  ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuggestionBoxComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
