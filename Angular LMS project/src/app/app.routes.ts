import { Routes } from '@angular/router';
import { Login } from './login';
import { StudentProfile } from './student-profile';
import { ProviderProfile } from './provider-profile';

export const routes: Routes = [
	{ path: 'login', component: Login },
	{ path: 'student-profile', component: StudentProfile },
	{ path: 'provider-profile', component: ProviderProfile },
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
];
