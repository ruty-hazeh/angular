import { Component,Input, Output ,EventEmitter, ViewChild} from '@angular/core';
import { student } from '../../models/student';
import { InfromationPopupComponent } from '../infromation-popup/infromation-popup.component';
import { CoursesComponent } from '../courses/courses.component';
@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [InfromationPopupComponent,CoursesComponent],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  count=5
  stud=new student(2,"","","",34);
  @ViewChild(InfromationPopupComponent) child!: InfromationPopupComponent;
  @Input()currentStudent:any;
  @Output() saveStudent: EventEmitter<any> = new EventEmitter<any>();

   saveChild(Name:string, Address:string,Phone:string ,AvgMark:number,DepartureDate?:Date)
  {
    this.stud=new student(this.count,Name,Address,Phone,AvgMark,DepartureDate)
    this.count=this.count+1;
    this.saveStudent.emit(this.stud)
  }
  DeleteStudent(){
    this.child.ShowPopUp('האם בטוח שברצונך למחוק את התלמיד?');
  }
}
