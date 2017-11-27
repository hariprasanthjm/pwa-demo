import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { SecureAuthGuard } from './shared/guards/secure-auth.guard';

/* export const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard-module/dashboard.module#DashboardModule',
    canActivate: [ SecureAuthGuard ]
  },
  {
    path: 'vehicles',
    loadChildren: './vehicles-module/vehicles.module#VehiclesModule',
    canActivate: [ SecureAuthGuard ]
  },
  {
    path: 'booking',
    loadChildren: './booking-module/booking.module#BookingModule',
    canActivate: [ SecureAuthGuard ]
  },
  {
    path: 'auth',
    loadChildren: './auth-module/auth.module#AuthModule'
  }
]; */

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ SecureAuthGuard ], children : [
      {
        path: '',
        loadChildren: './dashboard-module/dashboard.module#DashboardModule'
      },
      {
        path: 'vehicles',
        loadChildren: './vehicles-module/vehicles.module#VehiclesModule'
      },
      {
        path: 'booking',
        loadChildren: './booking-module/booking.module#BookingModule'
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: './auth-module/auth.module#AuthModule'
  }
];

