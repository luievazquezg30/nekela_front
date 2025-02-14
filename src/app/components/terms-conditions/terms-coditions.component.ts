import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonCard, IonImg, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-terms-coditions',
  templateUrl: './terms-coditions.component.html',
  styleUrls: ['./terms-coditions.component.scss'],
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TermsConditionsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
