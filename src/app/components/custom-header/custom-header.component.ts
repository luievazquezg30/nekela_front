import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, NgIf]
})
export class CustomHeaderComponent  implements OnInit {
  @Input() title: string = '';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

}
