import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonCard, IonImg, IonIcon, ModalController } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-send-suggestion',
  templateUrl: './send-suggestion.component.html',
  styleUrls: ['./send-suggestion.component.scss'],
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SendSuggestionComponent  implements OnInit {

  constructor(private navController: NavController) {}
  ngOnInit() {
  }


  goBack() {
    this.navController.back();
  }

  

}
