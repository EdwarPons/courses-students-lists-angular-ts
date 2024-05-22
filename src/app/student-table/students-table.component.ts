import { Component, OnInit } from '@angular/core';
import { students } from './mock';
import { NgFor } from '@angular/common';
import { Student } from '../models/student-to';

@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.css'
})
export class StudentsTableComponent implements OnInit {
  public students?: Student[];

  ngOnInit(): void {
    this.students = students;
  }
}
