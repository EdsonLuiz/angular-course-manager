import { Component, OnInit } from '@angular/core';

type LinkObject = {
  content: string
  route: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links: LinkObject[] = [
    {content: 'Home', route: 'courses'},
    {content: 'Courses', route: 'bingo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
