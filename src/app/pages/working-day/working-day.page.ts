import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonImg, IonCol, IonRow, IonLabel, IonSelect, IonItem, IonSelectOption, IonIcon, IonList, IonListHeader, IonButton, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from "../../components/custom-header/custom-header.component";

@Component({
  selector: 'app-working-day',
  templateUrl: './working-day.page.html',
  styleUrls: ['./working-day.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonButton, IonIcon, IonRow, IonContent, CommonModule, FormsModule, CustomHeaderComponent, IonCard, IonImg, IonSelect, IonItem, IonSelectOption, IonList, IonListHeader]
})
export class WorkingDayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any){
    console.log('Cargando más registros');
  }

}
