import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'Project Name 1',
      address: '200 Waitlist Way, Garner NC 27529',
      icon: 'home',
      status: 'watching'
    },
    {
      id: 2,
      name: 'Project Name 2',
      address: '201 Progress Way, Garner NC 27529',
      icon: 'home',
      status: 'in_progress'
    },
    {
      id: 3,
      name: 'Project Name 3',
      address: '500 Completed Way, Garner NC 27529',
      icon: 'home',
      status: 'completed'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
