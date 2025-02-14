import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonCard, IonList, IonItem, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from 'src/app/components/custom-header/custom-header.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonImg, IonContent, CommonModule, FormsModule, CustomHeaderComponent, IonList, IonItem, IonIcon]
})
export class ReportsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startReport() {
    console.log('Start report');
  }

}
