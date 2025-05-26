import { Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes')
    },
    {
        path: 'tasks',
        loadChildren: () => import('./task/features/task-list/task.routes')
    },
    {
        path: '**',
        redirectTo: '/tasks',
    },
    { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  
];
