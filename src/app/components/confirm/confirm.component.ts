import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  imports: [IonButton],
})
export class ConfirmComponent  implements OnInit {
  @Input() title!: string;
  @Input() message: string = '';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  confirm(){
    this.modalCtrl.dismiss({
      confirm: true
    });
  }

  cancel(){
    this.modalCtrl.dismiss({
      confirm: false
    });
  }

}
