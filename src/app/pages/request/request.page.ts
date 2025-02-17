import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonIcon, ModalController, IonLabel, IonItem, IonImg } from '@ionic/angular/standalone';
import { SucessModalComponent } from 'src/app/components/sucess-modal/sucess-modal.component';
import { LocalService } from 'src/app/services/local.service';
import { CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
  standalone: true,
  imports: [ IonLabel, IonIcon, IonButton, IonInput, IonContent, CommonModule, FormsModule]
})
export class RequestPage implements OnInit {
  step = 1;
  fields: any = {}
  constructor(private modalCtrl: ModalController, private localSvc: LocalService) { }

  ngOnInit() {
  }

  dimiss(){
    console.log('dismiss');
    this.modalCtrl.dismiss();
  }

  next(){
    this.step++;
    if(this.step > 3) {
      this.modalCtrl.create({
        component: SucessModalComponent,
        componentProps: {
          icon: 'checkmark-sharp',
          title: 'Tu reporte ha sido enviado',
          message: 'La denuncia ha sido enviada exitosamente. Lamentamos lo ocurrido, tomaremos cartas en el asunto con los responsables.',
          buttonText: 'Ir al inicio',
          route: '/tabs/home'
        }
      }).then((modal) => {
        modal.present();
        this.modalCtrl.dismiss();
      });
      this.step = 3;
    }
  }

  openCamera(index: number){
    this.localSvc.openCamera({
      quality: 90,
      resultType: CameraResultType.Uri
    }).then((image) => {
      if(image){
        this.fields['image'+index] = image;
      }
    });
  }

  removeImg(index: number){
    delete this.fields['image'+index];
  }

}
