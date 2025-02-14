import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import { LocalService } from 'src/app/services/local.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonIcon, NgClass]
})
export class MapPage implements OnInit {
  @ViewChild('map', {static: false}) mapRef: ElementRef<HTMLElement> | undefined;
  blueIcon = new L.Icon({
    iconUrl: '/assets/images/marker-icon-2x-blue.png',
    shadowUrl: '/assets/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  map: any;
  getPositionInterval: any;
  currentPosition: any;
  userMarker: any;
  step = 1;
  constructor(private navCtrl: NavController, private localSvc: LocalService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createMapWithLeaflet(4.60971, -74.08175);
    this.fakeLoading();
  }

  back() {
    this.navCtrl.back();
  }

  fakeLoading() {
    const loading = setInterval(() => {
      this.step++;
    }, 2000);
    if(this.step === 4){
      clearInterval(loading);
    }
  }

  async createMapWithLeaflet(lat: any, lng: any) {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    if(this.mapRef){
      try{
        this.map = L.map(this.mapRef?.nativeElement).setView([lat, lng], 17);
        //remove zoom controls
        this.map.zoomControl.remove();
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(this.map);
        this.checkGeolocationPermissions();
      }catch(e) {
        console.log('error catch', e);
      }
    }else{
      console.log('mapRef', this.mapRef);
    }
  }

  checkGeolocationPermissions() {
    Geolocation.checkPermissions().then((status) => {
      if(status.location === 'granted'){
        this.getCurrentPosition();
      }else{
        Geolocation.requestPermissions().then((status) => {
          if(status.location === 'granted'){
            this.getCurrentPosition();
          }else{
            this.localSvc.showToast('No se han otorgado los permisos de ubicación');
          }
        });
      }
    });
  }

  getCurrentPosition() {
    this.getPositionInterval = setInterval(() => {
      Geolocation.getCurrentPosition().then((position) => {
        this.currentPosition = position;
        this.addUserPositionMarker();
      });
    }, 2000); 
  }

  addUserPositionMarker() {
    if(this.currentPosition && this.map){
      //remove previous marker
      if(this.userMarker){
        this.map.removeLayer(this.userMarker);
      }
      console.log('currentPosition', this.currentPosition);
      //add new marker
      this.userMarker = L.marker([this.currentPosition.coords.latitude, this.currentPosition.coords.longitude],{icon: this.blueIcon})
      .addTo(this.map)
      .bindPopup('Mi ubicación');
    }
  }

  ionViewWillLeave() {
    clearInterval(this.getPositionInterval);
  }

}
