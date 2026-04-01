import { Routes } from '@angular/router';
import { Login } from './login';
import { StudentProfile } from './student-profile';

export const routes: Routes = [
	{ path: 'login', component: Login },
	{ path: 'student-profile', component: StudentProfile },
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
];
