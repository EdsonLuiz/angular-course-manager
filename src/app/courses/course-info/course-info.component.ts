import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  private _course: Course
  private _courseId: number = 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
    ) {
      this._courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
      this._course = this.courseService.courseByYd(this._courseId)
    }

  ngOnInit(): void {


  }

  get course() {
    return this._course
  }

  save(course: Course): void {
     this.courseService.save(course)
  }

}
