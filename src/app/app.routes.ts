import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { InfromationPopupComponent } from '../components/infromation-popup/infromation-popup.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { TeacherFormComponent } from '../components/teacher-form/teacher-form.component';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';
import { ApiComponent } from '../components/api/api.component';
import { AuthComponent } from '../components/auth/auth.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UsersChartComponent } from '../components/users-chart/users-chart.component';
export const routes: Routes = [
    // {path:'',component:AppComponent},
    {path:'courses',component:CoursesComponent},
    {path:'informationPopup',component:InfromationPopupComponent},
    {path:'studentDetails',component:StudentDetailsComponent},
    {path:'studentList',component:StudentListComponent},
    {path:'teacherForm',component:TeacherFormComponent},
    {path:'reactiveForm',component:ReactiveFormComponent},
    {path:'courseList',component:CoursesListComponent},
    {path:'api',component:ApiComponent},
    {path:'auth',component:AuthComponent},
    {path:'dashboard',component:DashboardComponent, canActivate: [authGuard],},
    {path:'users-chart',component:UsersChartComponent, canActivate: [authGuard],},
    { path: 'user-details/:userId', component: UserDetailsComponent },
];
