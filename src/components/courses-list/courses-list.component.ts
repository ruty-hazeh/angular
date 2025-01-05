import { Component } from '@angular/core';
import {Subject } from '../../models/course';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
interface SubjectNode {
  name: string;
}

interface CourseNode {
  IdCourse: number;
  NameCourse:string;
  SubjectCourse: Subject;
  Semester:number;
  Syllabus:SubjectNode[];
}

const TREE_DATA: CourseNode[] = [
  {
    IdCourse:1,
    NameCourse:'English',
    SubjectCourse:Subject.English,
    Semester:7,
    Syllabus: [
      { name: 'Introduction to English' },
      { name: 'Learning letters abc' },
      { name: 'Writing' },
      { name: 'Reading' }
    ]  },
  {
    IdCourse:2,
    NameCourse:'Programming',
    SubjectCourse:Subject.Programming,
    Semester:1,
    Syllabus: [
      { name: 'Introduction to programming world' },
      { name: 'Learning loops and functions' },
      { name: 'C#' },
      { name: 'Java' },
      { name: 'Python' }
    ]  },
    {
      IdCourse:3,
      NameCourse:'Math',
      SubjectCourse:Subject.Math,
      Semester:3,
      Syllabus: [
        { name: 'Introduction to Math world' },
        { name: 'Learning +-' },
        { name: 'mull' },
        { name: 'divide' },
      ]  }
];



@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule,CommonModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  treeControl = new NestedTreeControl<CourseNode | SubjectNode>(node => 
    'Syllabus' in node ? node.Syllabus : null
  );
  dataSource = new MatTreeNestedDataSource<CourseNode | SubjectNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: CourseNode | SubjectNode) => {'Syllabus' in node && node.Syllabus.length > 0;}
}



