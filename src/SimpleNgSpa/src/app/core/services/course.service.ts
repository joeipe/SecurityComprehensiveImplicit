import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiRoot: string;
  constructor(private _http: HttpClient) {
    this.apiRoot = 'http://localhost:1337/' + 'api/courses';
   }

   getCourse(): Observable<Course[]> {
    return this._http.get<Course[]>(`${this.apiRoot}/`);
  }
}

export interface Course {
  id: number;
  name: string;
}