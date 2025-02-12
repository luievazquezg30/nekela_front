import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFooter, IonCard, IonImg, IonItemDivider, GestureController, GestureDetail } from '@ionic/angular/standalone';
import { TaskCarouselComponent } from "../../components/task-carousel/task-carousel.component";
import { CapabilitiesCarouselComponent } from "../../components/capabilities-carousel/capabilities-carousel.component";
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
  constructor(private renderer: Renderer2, private gestureCtrl: GestureController, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter', this.footer.nativeElement);
    if(this.footer.nativeElement){
      const gesture = this.gestureCtrl.create({
        el: this.footer.nativeElement, // Detecta el gesto en toda la pantalla
        gestureName: 'swipe-footer',
        threshold: 0,
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
    console.log(event);
    if (event.deltaY < 30) {
      this.renderer.addClass(this.footer.nativeElement, 'footer-grow');
      this.renderer.removeClass(this.footer.nativeElement, 'footer-shrink');
    } else if (event.deltaY > -30) {
      this.renderer.addClass(this.footer.nativeElement, 'footer-shrink');
      this.renderer.removeClass(this.footer.nativeElement, 'footer-grow');
    }
  }

}
