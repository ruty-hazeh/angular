import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachers: Teacher[] =[
    new Teacher(1,"Nechama Levi",["א2","ב5","ג3"]),
    new Teacher(2,"Rachel",["ד2","ה7","ד3"]),
    new Teacher(3,"Ruty Cohen",["ז6","ו9","א2"])
  ]

  getTeachers(){
    return this.teachers;
  }
  addTeacher(t: Teacher){
    if(t!=null)
    this.teachers.push(t);
  }
  updateTeacher(t: Teacher){
    const teach=this.teachers.find(teacher=>teacher.Id==t.Id);
    if(teach)
    {
          teach.Name=t.Name;
          teach.Classes=t.Classes;  
    }

  }
  deleteTeacher(id:number){
    this.teachers=this.teachers.filter(teacher=>teacher.Id!=id);
  }
}
