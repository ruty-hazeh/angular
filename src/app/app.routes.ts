import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { InfromationPopupComponent } from '../components/infromation-popup/infromation-popup.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { TeacherFormComponent } from '../components/teacher-form/teacher-form.component';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';
export const routes: Routes = [
    // {path:'',component:AppComponent},
    {path:'courses',component:CoursesComponent},
    {path:'informationPopup',component:InfromationPopupComponent},
    {path:'studentDetails',component:StudentDetailsComponent},
    {path:'studentList',component:StudentListComponent},
    {path:'teacherForm',component:TeacherFormComponent},
    {path:'reactiveForm',component:ReactiveFormComponent},
    {path:'courseList',component:CoursesListComponent}

];
