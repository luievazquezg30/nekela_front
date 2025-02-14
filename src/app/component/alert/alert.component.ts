import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonButton, IonIcon } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  imports: [IonButton, IonIcon],
})
export class AlertComponent  implements OnInit {
  @Input() title!: string;
  @Input() message: string = '';
  @Input() buttonText: string = '';
  @Input() icon: string = '';
  @Input() route: string | null | undefined = null;
  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { }

  ngOnInit() {}

  confirm(){
    if(this.route){
      this.navCtrl.navigateRoot(this.route);
    }
    this.modalCtrl.dismiss({
      confirm: true
    });
  }
}
