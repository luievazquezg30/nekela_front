import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonCard, IonImg, IonIcon, ModalController, IonButton } from '@ionic/angular/standalone';
import { SuggestionBoxComponent } from '../suggestion-box/suggestion-box.component';
import { AdministrativeActasComponent } from '../administrative-actas/administrative-actas.component';
import { Router } from '@angular/router';
import { RequestVacationsPage } from 'src/app/pages/request-vacations/request-vacations.page';

@Component({
  selector: 'app-capabilities-carousel',
  templateUrl: './capabilities-carousel.component.html',
  styleUrls: ['./capabilities-carousel.component.scss'],
  imports: [IonCard, IonImg, IonIcon, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CapabilitiesCarouselComponent  implements OnInit {
  constructor( private modalCtrl: ModalController, private route: Router) { }

  ngOnInit() {}
  async openSuggestionBox(item: any = null): Promise<any> {
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
    async openAdministrativeActas(item: any = null): Promise<any> {
      return new Promise<any>(async resolve => {
        const modal = await this.modalCtrl.create({
          backdropDismiss: true,
          component: AdministrativeActasComponent,
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
     reports(){
    this.route.navigate(['/reports']);
  }

  async openRequestVacations(item: any = null): Promise<any> {
    return new Promise<any>(async resolve => {
      const modal = await this.modalCtrl.create({
        backdropDismiss: true,
        component: RequestVacationsPage,
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
