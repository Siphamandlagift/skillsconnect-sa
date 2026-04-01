import { Routes } from '@angular/router';
import { Login } from './login';
import { StudentProfile } from './student-profile';
import { ProviderProfile } from './provider-profile';
import { ManagerProfile } from './manager-profile';
import { CourseCreate } from './course-create';

export const routes: Routes = [
	{ path: 'login', component: Login },
	{ path: 'student-profile', component: StudentProfile },
	{ path: 'provider-profile', component: ProviderProfile },
	{ path: 'manager-profile', component: ManagerProfile },
	{ path: 'course-create', component: CourseCreate },
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
];
