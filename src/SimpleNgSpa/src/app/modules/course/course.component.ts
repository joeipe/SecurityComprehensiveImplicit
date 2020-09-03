import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {
  public courses: Course[];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    this.courseService.getCourse().subscribe(data => {
        this.courses = data;
    });
  }

}
