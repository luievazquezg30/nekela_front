import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonImg, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-capabilities-carousel',
  templateUrl: './capabilities-carousel.component.html',
  styleUrls: ['./capabilities-carousel.component.scss'],
  imports: [IonCard, IonImg, IonIcon],
})
export class CapabilitiesCarouselComponent  implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  reports(){
    this.route.navigate(['/reports']);
  }

}
