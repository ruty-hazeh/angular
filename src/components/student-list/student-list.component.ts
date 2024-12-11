import { Component } from '@angular/core';
import { student } from '../../models/student';
import { StudentDetailsComponent} from '../student-details/student-details.component';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent,NgTemplateOutlet],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students:student[]=[
    new student(1,"ruty","ben zakay","0548571828",100),
    new student(2,"naama","chaifa","05454432",78, new Date(2024,3,1),false,true),
    new student(3,"shirush","ashkelon gamla 4 לא לשכוח לבוא לבקר","055-6797080",90),
    new student(4,"adas","rechovot","05465348",84),
  ]
  selectedid=0
  viewDetailsStudent(i:number){
    this.selectedid= i;
  }
  AddStudent(){
    this.selectedid=-1
  }
  ParentSave(stud: student){
    this.students.push(stud);
    
  }
}