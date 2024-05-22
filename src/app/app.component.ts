import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesTableComponent } from "./courses-table/courses-table.component";
import { StudentsTableComponent } from "./student-table/students-table.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CoursesTableComponent, StudentsTableComponent, NgIf]
})
export class AppComponent {
  courses = true;

  handleChange()  {
    this.courses = !this.courses;
  }
}
