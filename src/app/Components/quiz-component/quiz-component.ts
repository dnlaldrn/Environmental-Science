import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  text: string;
  options: Option[];
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-component.html'
})
export class QuizComponent implements OnDestroy {
  questions: Question[] = [
    {
      text: '1. The belt of prevailing winds that is produced between 30° and 60° north latitude and 30° and 60° south latitude is called the',
      options: [
        { text: 'a. doldrums.', isCorrect: false },
        { text: 'b. westerlies.', isCorrect: true },
        { text: 'c. polar easterlies.', isCorrect: false },
        { text: 'd. trade winds.', isCorrect: false }
      ]
    },
    {
      text: '2. Which of the following statements about El Niño is true?',
      options: [
        { text: 'a. El Niño is the cold phase of the El Niño–Southern Oscillation cycle.', isCorrect: false },
        { text: 'b. El Niño is a long-term change in the location of warm and cold water masses in the Pacific Ocean.', isCorrect: false },
        { text: 'c. El Niño produces storms in the northern Pacific Ocean.', isCorrect: false },
        { text: 'd. El Niño produces winds in the western Pacific Ocean that push warm water eastward.', isCorrect: true }
      ]
    },
    {
      text: '3. Polar stratospheric clouds convert the products of CFCs into',
      options: [
        { text: 'a. carbon dioxide.', isCorrect: false },
        { text: 'b. hydrochloric acid.', isCorrect: false },
        { text: 'c. nitric acid.', isCorrect: false },
        { text: 'd. molecular chlorine.', isCorrect: true }
      ]
    },
    {
      text: '4. Which of the following is not an adverse effect of high levels of ultraviolet light?',
      options: [
        { text: 'a. disruption of photosynthesis', isCorrect: false },
        { text: 'b. disruption of ocean food chains', isCorrect: false },
        { text: 'c. premature aging of the skin', isCorrect: false },
        { text: 'd. increased amount of carbon dioxide in the atmosphere', isCorrect: true }
      ]
    },
    {
      text: '5. In which season (in the Northern Hemisphere) does carbon dioxide in the atmosphere decrease as a result of natural processes?',
      options: [
        { text: 'a. fall', isCorrect: false },
        { text: 'b. winter', isCorrect: false },
        { text: 'c. summer', isCorrect: true },
        { text: 'd. spring', isCorrect: false }
      ]
    },
    {
      text: '6. Which of the following gases is a greenhouse gas?',
      options: [
        { text: 'a. carbon dioxide', isCorrect: false },
        { text: 'b. water vapor', isCorrect: false },
        { text: 'c. methane', isCorrect: false },
        { text: 'd. all of the above', isCorrect: true }
      ]
    },
    {
      text: '7. Which of the following substances is not a source of methane?',
      options: [
        { text: 'a. fossil fuels', isCorrect: false },
        { text: 'b. sewage', isCorrect: false },
        { text: 'c. fertilizer', isCorrect: true },
        { text: 'd. rice', isCorrect: false }
      ]
    },
    {
      text: '8. The average global temperature increased by how many Celsius degrees during the 20th century?',
      options: [
        { text: 'a. 0.4°C', isCorrect: false },
        { text: 'b. 0.6°C', isCorrect: true },
        { text: 'c. 0.8°C', isCorrect: false },
        { text: 'd. 1.0°C', isCorrect: false }
      ]
    },
    {
      text: '9. Which of the following countries decided not to ratify the Kyoto Protocol?',
      options: [
        { text: 'a. Russia', isCorrect: false },
        { text: 'b. United States', isCorrect: true },
        { text: 'c. Canada', isCorrect: false },
        { text: 'd. Australia', isCorrect: false }
      ]
    }
  ];

  quizStarted: boolean = false;
  quizCompleted: boolean = false;
  currentQuestionIndex: number = 0;
  score: number = 0;
  
  timeLeft: number = 60;
  timerInterval: any;
  
  isAnswered: boolean = false;
  selectedOption: Option | null = null;

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  // Removed startTimer() from ngOnInit so it waits for the button click
  ngOnDestroy(): void {
    this.clearTimer();
  }

  // Triggered by the "Start Quiz" button
  startQuiz(): void {
    this.quizStarted = true;
  }

  

  clearTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }


  selectOption(option: Option): void {
    if (this.isAnswered) return;

    this.clearTimer(); // Stop the timer once they answer
    this.isAnswered = true;
    this.selectedOption = option;

    if (option.isCorrect) {
      this.score++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.isAnswered = false;
      this.selectedOption = null;
       // Restart timer for the next question
    } else {
      this.quizCompleted = true;
    }
  }

  restartQuiz(): void {
    this.quizStarted = false; // Send them back to the start screen
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
    this.isAnswered = false;
    this.selectedOption = null;
    this.clearTimer();
  }

  getOptionClass(option: Option): string {
    if (!this.isAnswered) {
      return 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:border-slate-500 border-slate-700';
    }
    
    if (option.isCorrect) {
      return 'bg-emerald-600 text-white border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]';
    }
    
    if (this.selectedOption === option && !option.isCorrect) {
      return 'bg-rose-600 text-white border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.3)]';
    }
    
    return 'bg-slate-900/50 text-slate-500 border-slate-800 opacity-60';
  }
}