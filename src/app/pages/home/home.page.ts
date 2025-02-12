import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFooter, IonCard, IonImg } from '@ionic/angular/standalone';
import { TaskCarouselComponent } from "../../components/task-carousel/task-carousel.component";
import { CapabilitiesCarouselComponent } from "../../components/capabilities-carousel/capabilities-carousel.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonContent, CommonModule, FormsModule, IonFooter, TaskCarouselComponent, CapabilitiesCarouselComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
