import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';
import { Teacher } from '../models/teacher';
import { TeacherFormComponent } from '../components/teacher-form/teacher-form.component';
import { IconsTextPipe } from '../pipes/icons-text.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentListComponent,StudentDetailsComponent,TeacherFormComponent,
    IconsTextPipe, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  t?: Teacher=new Teacher(1,"yochi",["ב3","ג2"]);
  title = 'ruty';
  whatTime(){
    let currentHour=new Date().getHours();
    if(currentHour>6&&currentHour<13)
    return 'good morning';
    else if(currentHour>=13&&currentHour<=18)
      return'good noon';
    else
      return'good evening';
  }
}