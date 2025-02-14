import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CacheService } from './cache.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { Camera, ImageOptions } from '@capacitor/camera';
@Injectable({
  providedIn: 'root'
})
export class LocalService {
  /**
   * In this file we will create a service that will be used to store and retrieve data from the local storage, manage the
   *  api calls to the backend like a 'middleware' and global functions.
   */
  token!: string;
  constructor(
    private storage: Storage,
    private cacheSvc: CacheService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
    this.init().then(() => {
        this.loadToken();
    });
  }

  async init() {
    const strg = this.storage.create();
  }

  async loadToken() {
    return this.token = await this.storage.get('token');
  }

  async saveInStorage(key: string, value: any) {
    this.storage.set(key, value);
  }

  async removeFromStorage(key: string) {
    this.storage.remove(key);
  }

  async getFromStorage(key: string) {
    return this.storage.get(key);
  }

  async clearStorage() {
    this.cacheSvc.cleaar();
    return this.storage.clear();
  }

  async showToast(message: string,position: 'top' | 'bottom' | 'middle' = 'top', duration?: number){
    const toast = await this.toastCtrl.create({
      message,
      position,
      duration:duration || 3000
    });
    toast.present();
  }

  async openCamera(options: ImageOptions) {
    try {
      const permissions = await Camera.checkPermissions();
      
      if (permissions.camera === 'granted') {
        return this.launchCamera(options);
      } else {
        const permissionResponse = await Camera.requestPermissions();
        
        if (permissionResponse.camera === 'granted') {
          return this.launchCamera(options);
        } else {
          this.handleErrorMessage('Es necesario otorgar permisos para la cámara.');
          return Promise.reject('Es necesario otorgar permisos para la cámara.');
        }
      }
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  
  async launchCamera(options: ImageOptions) {
    try {
      const image = await Camera.getPhoto(options);
      return image;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async handleErrorMessage(error: any){
    this.loadingCtrl.dismiss();
    if(error.error && error.error.message){
      if(error.error.message === 'Unauthenticated.'){
        this.clearStorage();
        this.navCtrl.navigateRoot('/login');
      }else{
        this.showToast(error.error.message);
      }
    }else if(error.errors && Array.isArray(error.errors)){
      this.showToast(error.errors[0].message);
    }else if(error.message){
      this.showToast(error.message);
    }else{
      this.showToast('Ha ocurrido un error');
    }
  }
}
