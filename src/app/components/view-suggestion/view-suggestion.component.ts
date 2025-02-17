import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonCard, IonImg, IonIcon, ModalController } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { SendSuggestionComponent } from '../send-suggestion/send-suggestion.component';

@Component({
  selector: 'app-view-suggestion',
  templateUrl: './view-suggestion.component.html',
  styleUrls: ['./view-suggestion.component.scss'],
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewSuggestionComponent  implements OnInit {

  constructor(private navController: NavController, private modalcrtl: ModalController) {}
  ngOnInit() {
  }


  goBack() {
    this.navController.back();
  }

  

}
