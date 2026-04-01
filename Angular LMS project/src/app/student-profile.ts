import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
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
