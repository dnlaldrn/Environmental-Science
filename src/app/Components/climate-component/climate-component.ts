import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-climate-component',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './climate-component.html',
  styleUrls: ['./climate-component.css'],
})
export class ClimateComponent {

  isVideo1playing = false;
  isVideo2playing = false;

  playVideo1() {
    this.isVideo1playing = !this.isVideo1playing;
  }

  playVideo2() {
    this.isVideo2playing = !this.isVideo2playing;
  }
 selectedAnswer: string = '';

chooseAnswer(answer: string) {
  this.selectedAnswer = answer;
  console.log(answer)
}

}