import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkSharp, notificationsOutline, timeOutline, exitOutline, chevronForwardSharp, chevronBackOutline } from 'ionicons/icons';
const shield = 'assets/icons/shield.svg';
const person = 'assets/icons/person.svg';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({'shield': shield, notificationsOutline, 'person': person, checkmarkSharp, timeOutline, exitOutline, chevronForwardSharp, chevronBackOutline});
  }
}
