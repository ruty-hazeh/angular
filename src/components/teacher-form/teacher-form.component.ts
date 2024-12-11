import { Component,Input } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {
  public teacher:Teacher=new Teacher(-1,"",[]);
  public teachers: Teacher[]=[];

constructor(private teacherService: TeacherService) {
  this.teachers = this.teacherService.getTeachers(); 
}


onSubmit() {
  if(this.teachers.find(t=>t.Id==this.teacher.Id))
    {
      console.log("update")
      this.teacherService.updateTeacher(this.teacher);
    } 
    else
    {
      console.log( "added")
      this.teacherService.addTeacher(this.teacher);
    }
    this.teachers = this.teacherService.getTeachers();
}

}
