import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ozone-component',
  imports: [CommonModule],
  templateUrl: './ozone-component.html',
  styleUrl: './ozone-component.css',
})
export class OzoneComponent {
   play = false;

  playVideo(){
    this.play = !this.play;
  }

  selectedAnswer : string = ''
  chooseAnswer(answer:string){
    this.selectedAnswer = answer;

  }
}
