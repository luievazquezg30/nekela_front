import { Component, Input, OnInit } from '@angular/core';
import { IonIcon, IonButton, ModalController } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sucess-modal',
  templateUrl: './sucess-modal.component.html',
  styleUrls: ['./sucess-modal.component.scss'],
  imports: [IonIcon, IonButton, NgIf]
})
export class SucessModalComponent  implements OnInit {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() message: string = '';
  @Input() buttonText!: string;
  @Input() route!: string;
  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {}

  dimiss(){
    if(this.route){
      this.navCtrl.navigateRoot(this.route);
      this.modalCtrl.dismiss();
    }else{
      this.modalCtrl.dismiss();
    }
  }

}
