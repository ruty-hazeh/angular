import { Component } from '@angular/core';

@Component({
  selector: 'app-infromation-popup',
  standalone: true,
  imports: [],
  templateUrl: './infromation-popup.component.html',
  styleUrl: './infromation-popup.component.css'
})
export class InfromationPopupComponent {
  text:string=""
  ShowPopUp(txt:string){
      this.text=txt;
  }
}
