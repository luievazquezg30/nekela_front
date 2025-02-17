import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { MyAccountComponent } from '../../components/my-account/my-account.component';
import { TermsConditionsComponent } from 'src/app/components/terms-conditions/terms-coditions.component';
import { NavController } from '@ionic/angular';
import { SuggestionBoxComponent } from 'src/app/components/suggestion-box/suggestion-box.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountPage implements OnInit {

  constructor(private modalCtrl: ModalController, private navController: NavController) { }

  ngOnInit() {
  }

  async openMyAccount(item: any = null): Promise<any> {
    return new Promise<any>(async resolve => {
      const modal = await this.modalCtrl.create({
        backdropDismiss: true,
        component: MyAccountComponent,
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

  async openTermsConditions(item: any = null): Promise<any> {
    return new Promise<any>(async resolve => {
      const modal = await this.modalCtrl.create({
        backdropDismiss: true,
        component: TermsConditionsComponent,
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

  async openSuggestion(item: any = null): Promise<any> {
    return new Promise<any>(async resolve => {
      const modal = await this.modalCtrl.create({
        backdropDismiss: true,
        component: SuggestionBoxComponent,
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


  goBack() {
    this.navController.back();
  }
}

