import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface User {
  name: string;
  email: string;
  role: 'student' | 'manager' | 'provider';
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiUrl = 'https://your-backend-api.com/api/users'; // TODO: Set your real API URL here
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
