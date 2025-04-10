import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonCard, IonImg, IonIcon, ModalController, IonButton, IonHeader, IonFooter, IonText, IonItem, IonList, IonTitle, IonToolbar, IonContent } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { SendSuggestionComponent } from '../send-suggestion/send-suggestion.component';

@Component({
  selector: 'app-view-acta',
  templateUrl: './view-acta.component.html',
  styleUrls: ['./view-acta.component.scss'],
  standalone: true,
  imports: [IonButton, IonFooter, IonText, IonItem, IonList, IonTitle, IonIcon, IonToolbar, IonHeader, IonContent],
})
export class ViewActaComponent  implements OnInit {

  constructor(private navController: NavController, private modalcrtl: ModalController) {}
  ngOnInit() {
  }


  goBack() {
    this.navController.back();
  }

  

}
