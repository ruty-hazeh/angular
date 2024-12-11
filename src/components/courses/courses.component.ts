import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { CourseColorDirective } from '../../directives/course-color.directive';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseColorDirective,CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[];

  constructor(private courseService: CourseService ){
    this.courses=this.courseService.getCourses();
  }
}
