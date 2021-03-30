import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styles: [
  ]
})
export class CourseListComponent implements OnInit {

  private _courses: Course[] = []

  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this._courseService.courses
  }

  get courses() {
    return [...this._courses]
  }

}
