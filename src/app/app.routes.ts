import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { RequestVacationsPage } from './pages/request-vacations/request-vacations.page';
import { RequestPage } from './pages/request/request.page';

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
  {
    path: 'map',
    loadComponent: () => import('./pages/map/map.page').then( m => m.MapPage)
  },
  {
    path: 'reports',
    loadComponent: () => import('./pages/reports/reports.page').then( m => m.ReportsPage)
  },
  {
    path: 'report',
    loadComponent: () => import('./pages/report/report.page').then( m => m.ReportPage)
  },
  {
    path: 'request-vacations',
    loadComponent: () => import('./pages/request-vacations/request-vacations.page').then( m => m.RequestVacationsPage)
  },
  {
    path: 'request',
    loadComponent: () => import('./pages/request/request.page').then( m => m.RequestPage)
  },
];
