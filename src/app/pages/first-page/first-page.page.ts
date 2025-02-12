import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonGrid, IonRow, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
  standalone: true,
  imports: [IonButton, IonRow, IonGrid, IonImg, IonContent, CommonModule, FormsModule]
})
export class FirstPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
