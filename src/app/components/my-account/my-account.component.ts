import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonCard, IonImg, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
  standalone: true,
  imports: [IonCard, IonImg, IonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAccountComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
