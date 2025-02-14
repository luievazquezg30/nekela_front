import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonCard, IonList, IonItem, IonIcon, IonButton, ModalController } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/components/custom-header/custom-header.component';
import { ReportPage } from '../report/report.page';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonImg, IonContent, CommonModule, FormsModule, CustomHeaderComponent, IonList, IonItem, IonIcon]
})
export class ReportsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  startReport() {
    this.modalCtrl.create({
      component: ReportPage
    }).then((modal) => {
      modal.present();
    });
  }

}
