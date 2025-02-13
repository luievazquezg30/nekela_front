import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonIcon, IonList, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from "../../components/custom-header/custom-header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.page.html',
  styleUrls: ['./surveys.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonContent, CommonModule, FormsModule, CustomHeaderComponent, IonItem, IonIcon, IonList]
})
export class SurveysPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  details(){
    this.route.navigate(['/survey-details']);
  }

  loadData(event: any){
    console.log('Cargando más registros');
  }

}
