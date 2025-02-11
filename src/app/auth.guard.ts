import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LocalService } from './services/local.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const localService = inject(LocalService);
  const navCtrl = inject(NavController);
  let token = await localService.loadToken();
  return true; //accept all routes for now
  /*if(token){
    if(route?.routeConfig?.path === 'login' || route?.routeConfig?.path === 'first-page') {
      navCtrl.navigateRoot('/tabs/home');
    }
    return true;
  }else{
    if(route?.routeConfig?.path === 'login' || route?.routeConfig?.path === 'first-page') {
      return true;
    }
    navCtrl.navigateRoot('/login');
    return false;
  }*/
};
