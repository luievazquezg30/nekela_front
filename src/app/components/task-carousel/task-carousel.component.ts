import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-task-carousel',
  templateUrl: './task-carousel.component.html',
  styleUrls: ['./task-carousel.component.scss'],
  imports: [IonIcon],
})
export class TaskCarouselComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
