import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonButton, IonCol, IonRow } from '@ionic/angular/standalone';
import { CustomHeaderComponent } from "../../components/custom-header/custom-header.component";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonButton, IonCard, IonContent, CommonModule, FormsModule, CustomHeaderComponent]
})
export class SubscriptionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  call() {
    console.log('Calling');
  }

}
