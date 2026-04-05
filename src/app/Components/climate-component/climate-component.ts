import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Quizitems {
  question: string;
  choices: string[];
  answer:string,
}

@Component({
  selector: 'app-climate-component',
  standalone: true,
  imports: [RouterOutlet],
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

  quizItems: Quizitems[] = [
    {
      question: 'It is the state of the atmosphere at a particular place at a particular moment',
      choices: [
        'Weather',
        'Climate',
        'Temperature',
        'Atmosphere'
      ],
      answer:"Weather",
    }
  ];
}