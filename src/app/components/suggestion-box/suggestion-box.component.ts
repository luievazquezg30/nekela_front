import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonCard, IonImg, IonIcon, ModalController } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { ViewSuggestionComponent } from '../view-suggestion/view-suggestion.component';
import { SendSuggestionComponent } from '../send-suggestion/send-suggestion.component';

@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.scss'],
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuggestionBoxComponent  implements OnInit {

  constructor(private navController: NavController, private modalCrtl: ModalController) {}
  ngOnInit() {
  }


  goBack() {
    this.navController.back();
  }

  async openSendSuggestion(item: any = null): Promise<any> {
    return new Promise<any>(async resolve => {
      const modal = await this.modalCrtl.create({
        backdropDismiss: true,
        component: SendSuggestionComponent,
        mode: 'ios',
        id: 'modal-reserve',
        componentProps: {
          item: item
        }
      });
  
      await modal.present();
  
      modal.onDidDismiss().then(data => {
        resolve(data.data);
      });
    });
  }
  async openViewSuggestion(item: any = null): Promise<any> {
    return new Promise<any>(async resolve => {
      const modal = await this.modalCrtl.create({
        backdropDismiss: true,
        component: ViewSuggestionComponent,
        mode: 'ios',
        id: 'modal-reserve',
        componentProps: {
          item: item
        }
      });
  
      await modal.present();
  
      modal.onDidDismiss().then(data => {
        resolve(data.data);
      });
    });
  }



}
