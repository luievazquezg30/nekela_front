import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonCard, IonImg, IonIcon, ModalController,IonButton, IonHeader } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { SendSuggestionComponent } from '../send-suggestion/send-suggestion.component';

@Component({
  selector: 'app-view-acta',
  templateUrl: './view-acta.component.html',
  styleUrls: ['./view-acta.component.scss'],
  standalone: true,
  imports: [],
})
export class ViewActaComponent  implements OnInit {

  constructor(private navController: NavController, private modalcrtl: ModalController) {}
  ngOnInit() {
  }


  goBack() {
    this.navController.back();
  }

  

}
