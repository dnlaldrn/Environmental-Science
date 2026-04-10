import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {QuizComponent} from '../../Components/quiz-component/quiz-component'

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, QuizComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
