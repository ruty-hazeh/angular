import { Injectable } from '@angular/core';
import { Course, Subject } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // constructor() { }

private courses=[
  new Course(1,"Graphic", Subject.Graphic),
  new Course(2,"Programming", Subject.Programming),
  new Course(3,"Math", Subject.Math),
  new Course(4,"Teaching", Subject.Teaching)
]

getCourses(){
  return this.courses;  
}


}
