import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { ModalController} from '@ionic/angular/standalone';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/component/alert/alert.component';

@Component({
  selector: 'app-task-carousel',
  templateUrl: './task-carousel.component.html',
  styleUrls: ['./task-carousel.component.scss'],
  imports: [IonIcon],
})
export class TaskCarouselComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private route: Router) { }

  ngOnInit() {}

  startWorkSession(){
    this.modalCtrl.create({
      component: ConfirmComponent,
      componentProps: {
        title: '¿Quieres inciar tu jornada?',
      }
    }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if(data.data.confirm){
          this.route.navigate(['/map']);
        }else{
          console.log('Jornada cancelada');
        }
      });
    });
  }

  finishWorkSession(){
    this.modalCtrl.create({
      component: ConfirmComponent,
      componentProps: {
        title: '¿Quieres registrar tu salida?',
      }
    }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if(data.data.confirm){
          console.log('Jornada finalizada');
          this.openModal();
        }else{
          console.log('Jornada cancelada');
        }
      });
    });
  }

  workingDay(){
    this.route.navigate(['/working-day']);
  }

  surveys(){
    this.route.navigate(['/surveys']);
  }

  openModal() {
    this.modalCtrl.create({
      component: AlertComponent,
      componentProps: {
        title: '¡Salida exitosa!',
        icon: 'checkmark-sharp',
        message: 'Se registró tu salida con éxito a las 18:05:23 PM',
        buttonText: 'Volver al inicio',
        route: '/tabs/home'
      }
    }).then((modal) => {
      modal.present();
    });
  }

}
