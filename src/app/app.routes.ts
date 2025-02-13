import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
   path: '',
   redirectTo: 'first-page',
   pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    canActivate: [authGuard],
  },
  {
    path: 'first-page',
    loadComponent: () => import('./pages/first-page/first-page.page').then( m => m.FirstPagePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'subscription',
    loadComponent: () => import('./pages/subscription/subscription.page').then( m => m.SubscriptionPage)
  },
  {
    path: 'working-day',
    loadComponent: () => import('./pages/working-day/working-day.page').then( m => m.WorkingDayPage)
  },
  {
    path: 'surveys',
    loadComponent: () => import('./pages/surveys/surveys.page').then( m => m.SurveysPage)
  },
  {
    path: 'survey-details',
    loadComponent: () => import('./pages/survey-details/survey-details.page').then( m => m.SurveyDetailsPage)
  },
];
