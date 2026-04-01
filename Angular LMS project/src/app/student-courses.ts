import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  templateUrl: './student-courses.html',
  styleUrl: './student-courses.css',
})
export class StudentCourses {
  readonly courses = signal([
    { title: 'Web Development', progress: 80, status: 'In Progress' },
    { title: 'Data Science Basics', progress: 100, status: 'Completed' },
    { title: 'UI/UX Design', progress: 45, status: 'In Progress' },
  ]);
}
