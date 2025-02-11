import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  /**
   * In this file we will create a service that will be used to store and retrieve data from the app memory.
   */
  private cache: {[key: string]: any} = {};
  constructor() { }

  set(key: string, value: any, expiryInMinutes: number) {
    const expiry = Date.now() + expiryInMinutes * 60 * 1000;
    this.cache[key] = { value, expiry };
  }

  get(key: string) {
    const cached = this.cache[key];
    if(cached){
      if(Date.now() < cached.expiry){
        return cached.value;
      }else{
        delete this.cache[key];
      }
    }else{
      return null;
    }
  }

  cleaar() {
    this.cache = {};
  }
}
