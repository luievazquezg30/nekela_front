import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { ModalController} from '@ionic/angular/standalone';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-task-carousel',
  templateUrl: './task-carousel.component.html',
  styleUrls: ['./task-carousel.component.scss'],
  imports: [IonIcon],
})
export class TaskCarouselComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  openModal(){
    this.modalCtrl.create({
      component: ConfirmComponent,
      componentProps: {
        title: '¿Quieres inciar tu jornada?',
      }
    }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if(data.data.confirm){
          console.log('Jornada iniciada');
        }else{
          console.log('Jornada cancelada');
        }
      });
    });
  }

}
