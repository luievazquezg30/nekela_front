import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CacheService } from './cache.service';
import {ToastController} from '@ionic/angular';
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
}
