import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  courseId: number = 0

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
  }

}
