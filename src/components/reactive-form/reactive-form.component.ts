import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  form:FormGroup;
  
  constructor(private fb:FormBuilder)
  {
    this.form=this.fb.group({
      classes:this.fb.array([])
    });
  }

  get classes()
  {
    var t=this.form.get('classes')as FormArray;
    return t;
  }


  addClass()
  {
    var t=this.classes;
    this.classes.push(this.fb.group({
      idClass:['',Validators.required],
      nameClass: ['',[Validators.required, Validators.pattern('^[a-z][1-9]$')]],
      nameTeacher:['',[Validators.required,Validators.maxLength(20)]]
    }))

  }

  onSubmit()
  {
    console.log(this.form.value);
  }



}
