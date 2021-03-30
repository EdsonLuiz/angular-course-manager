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
  private _filteredCourses: Course[]= [];
  private _filterBy: string = '';

  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this._courseService.courses
    this._filteredCourses = this._courses
  }

  get courses() {
    return [...this._courses]
  }

  set filter(value: string) {
    this._filterBy = value;

    this._filteredCourses = this._courses.filter(course => course.name.toLowerCase().includes(value))
  }

  get filter() {
    return this._filterBy;
  }

  get filteredCourses() {
    return [...this._filteredCourses]
  }

}
