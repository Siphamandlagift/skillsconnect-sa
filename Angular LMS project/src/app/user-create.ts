import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-create',
  standalone: true,
  templateUrl: './user-create.html',
  styleUrl: './user-create.css',
})
export class UserCreate {
  readonly name = signal('');
  readonly email = signal('');
  readonly role = signal('student');
  readonly submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
    // Here you would send the user data to a backend or service
    // For now, just show a success message
  }
}
