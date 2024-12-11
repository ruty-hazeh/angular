import { Directive,ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[appCourseColor]',
  standalone: true
})
export class CourseColorDirective {


  constructor(private el: ElementRef) {
  }
@Input() typecourse?:string;
ngAfterViewInit() {
    let color="";
    switch(this.typecourse)
    {
      case 'Graphic': color="lightgreen"; break;
      case 'Programming': color="lightblue";break;
      case 'Math': color="yellow" ;break;
      case 'Teaching': color="pink";break;
    }
    this.el.nativeElement.style.backgroundColor = color;
}

}
