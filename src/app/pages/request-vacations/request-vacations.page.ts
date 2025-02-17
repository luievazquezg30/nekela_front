import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonCard, IonList, IonItem, IonIcon, IonButton, ModalController } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/components/custom-header/custom-header.component';
import { ReportPage } from '../report/report.page';
import { RequestPage } from '../request/request.page';

@Component({
  selector: 'app-request-vacations',
  templateUrl: './request-vacations.page.html',
  styleUrls: ['./request-vacations.page.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonImg, IonContent, CommonModule, FormsModule, CustomHeaderComponent, IonList, IonItem, IonIcon]
})
export class RequestVacationsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  startRequest() {
    this.modalCtrl.create({
      component: RequestPage
    }).then((modal) => {
      modal.present();
    });
  }

}
