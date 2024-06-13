import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { QuestionService } from '../../services/apis/question.service';
import { QuestionInterface } from '../../interfaces/interfaces';
import { SharedService } from '../../shared/shared.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-playing',
  standalone: true,
  imports: [RouterModule, NgClass, TranslateModule],
  templateUrl: './playing.component.html',
  styleUrl: './playing.component.scss'
})
export class PlayingComponent implements OnInit {
  countdown = 0;
  interval?: number;
  isCorrection = false;
  errorMargin = 3;

  currentQuestion: QuestionInterface = {
    _id: '1',
    questionText: 'Quelle est la capitale de la France ?',
    options: ['Paris', 'Londres', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
    level: 'easy',
    categories: 'géographie',
  }; // Exemple de question statique

  constructor(
    private router: Router,
    private questionService: QuestionService,
    public shared: SharedService) { }

  ngOnInit(): void {
    clearInterval(this.interval);
    this.checkAuthUser();
    this.shared.score = 0;
  }

  checkAuthUser() {
    if (!this.shared.authUser || !this.shared.level) {
      this.router.navigate(['home'])
    } else {
      this.loadNextQuestion();
    }
  }

  loadNextQuestion(): void {
    this.countdown = 30;
    this.interval = window.setInterval(() => this.countdownBegin(), 1000);
    this.isCorrection = false;
    const dataToSend = {
      level: this.shared.level,
      categories: this.shared.category,
    }

    this.questionService.getNext(dataToSend).subscribe({
      next: (data : QuestionInterface) => {
        this.currentQuestion = data;
        this.countdownBegin();
        
      }
    })
  }

  countdownBegin() {
    if (this.countdown > 0) {
      this.countdown--;
    } else {
      this.shared.isGameOver = true;
      clearInterval(this.interval);
    }
  }

  counterrorMarginRest() {
    if (this.errorMargin > 1) {
      this.errorMargin--;
      setTimeout(() => {
        clearInterval(this.interval);
        this.loadNextQuestion();
      }, 2000);
    } else {
      this.shared.isGameOver = true;
      this.errorMargin = 3;
    }
  }

  selectAnswer(index: number): void {
    this.isCorrection = true;
    clearInterval(this.interval);

    if (this.currentQuestion.options[index] === this.currentQuestion.correctAnswer) {
      this.shared.score += 10;
      setTimeout(() => {
        clearInterval(this.interval);
        this.loadNextQuestion();
      }, 2000);
    } else {
      this.counterrorMarginRest();
    }

  }

  quitQuiz(): void {
    this.router.navigate(['home']);
    clearInterval(this.interval);
  }

}
