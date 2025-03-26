import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./pages/calories-tacker/calories-tacker.component')
  }];
