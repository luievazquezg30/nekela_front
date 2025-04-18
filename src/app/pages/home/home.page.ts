import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFooter, IonCard, IonImg, IonItemDivider, GestureController, GestureDetail, ModalController } from '@ionic/angular/standalone';
import { TaskCarouselComponent } from "../../components/task-carousel/task-carousel.component";
import { CapabilitiesCarouselComponent } from "../../components/capabilities-carousel/capabilities-carousel.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonContent, CommonModule, FormsModule, IonFooter, TaskCarouselComponent, CapabilitiesCarouselComponent, IonItemDivider]
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) content!: ElementRef<HTMLIonContentElement>
  @ViewChild('footer', {read: ElementRef}) footer!: ElementRef;
   constructor(
      private renderer: Renderer2,
      private gestureCtrl: GestureController,
      private cdRef: ChangeDetectorRef,
      private route: Router,
      private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if(this.footer.nativeElement){
      const gesture = this.gestureCtrl.create({
        el: this.footer.nativeElement,
        gestureName: 'swipe-footer',
        threshold: 60,
        direction: 'y',
        onStart: () => {
          this.cdRef.detectChanges();
        },
        onMove: (event) => this.handleGesture(event),
        onEnd: () => this.onEnd()
      });
  
      gesture.enable();
    }else{
      console.log('No se ha encontrado el footer');
    }
  }

  private onEnd() {
    this.cdRef.detectChanges();
  }


  handleGesture(event: GestureDetail) {
    if (event.deltaY < 30) {
      this.renderer.addClass(this.footer.nativeElement, 'footer-grow');
      this.renderer.removeClass(this.footer.nativeElement, 'footer-shrink');
    } else if (event.deltaY > -30) {
      this.renderer.addClass(this.footer.nativeElement, 'footer-shrink');
      this.renderer.removeClass(this.footer.nativeElement, 'footer-grow');
    }
  }
goToSubscription() {
    this.route.navigate(['/subscription']);
  }
}
