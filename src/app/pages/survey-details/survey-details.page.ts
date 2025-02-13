import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonLabel } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from "../../components/custom-header/custom-header.component";

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.page.html',
  styleUrls: ['./survey-details.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonContent, CommonModule, FormsModule, CustomHeaderComponent]
})
export class SurveyDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
