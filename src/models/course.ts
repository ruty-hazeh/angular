export class Course{

constructor(public IdCourse: number,
    public NameCourse:string,
    public SubjectCourse: Subject
    ){}
}

export enum Subject {
    Math= 'Math',
    Programming = 'Programming', 
    Graphic = 'Graphic' ,
    Teaching ='Teaching'
}