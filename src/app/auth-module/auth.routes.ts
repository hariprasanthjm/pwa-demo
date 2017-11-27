import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const AuthRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: SignupComponent
  },
  { path: 'login', component: LoginComponent }
];
