import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameOverComponent } from './game-over/game-over.component';
import { SharedService } from './shared/shared.service';
import { StatisticComponent } from './statistic/statistic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, GameOverComponent, StatisticComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(public shared: SharedService) { }

  ngOnInit(): void {
    this.checkAuthUser();
  }

  checkAuthUser() {
    const authUser = localStorage.getItem('quiz-user');
    if (authUser) {
      this.shared.authUser = JSON.parse(authUser);      
    }
  }

}
