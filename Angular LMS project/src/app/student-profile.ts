import { Component, signal } from '@angular/core';
import { StudentDashboard } from './student-dashboard';
import { StudentCalendar } from './student-calendar';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [StudentDashboard, StudentCalendar],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile {
  readonly student = signal({
    name: 'Jane Doe',
    email: 'jane.doe@email.com',
    course: 'Web Development',
  });
}
