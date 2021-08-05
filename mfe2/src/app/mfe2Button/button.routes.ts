import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ButtonComponent } from './button/button.component';

export const BUTTON_ROUTES: Routes = [
    {
      path: '',
      component: ButtonComponent
    },
    {
      path: 'mfe2-button',
      component: HomeComponent
    }
];