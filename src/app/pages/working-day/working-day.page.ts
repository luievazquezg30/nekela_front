import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonImg, IonRow, IonSelect, IonItem, IonSelectOption, IonIcon, IonList, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from "../../components/custom-header/custom-header.component";

@Component({
  selector: 'app-working-day',
  templateUrl: './working-day.page.html',
  styleUrls: ['./working-day.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonIcon, IonRow, IonContent, CommonModule, FormsModule, CustomHeaderComponent, IonCard, IonImg, IonSelect, IonItem, IonSelectOption, IonList]
})
export class WorkingDayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any){
    console.log('Cargando más registros');
  }

}
