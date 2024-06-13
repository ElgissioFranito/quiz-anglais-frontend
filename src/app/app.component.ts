import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameOverComponent } from './game-over/game-over.component';
import { SharedService } from './shared/shared.service';
import { StatisticComponent } from './statistic/statistic.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    GameOverComponent, 
    StatisticComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  supportedLang = ['en', 'fr'];

  constructor(public shared: SharedService, public translate: TranslateService) {
    this.initLanguage();
  }

  ngOnInit(): void {
    this.checkAuthUser();
  }

  initLanguage(){
    this.translate.addLangs(this.supportedLang);
    const userLang = localStorage.getItem('userLang');
    if (userLang) {
      this.shared.lang = userLang;
      this.translate.use(userLang);
    } else {
      this.shared.lang = 'fr';
      this.translate.setDefaultLang('fr');
      localStorage.setItem('userLang', 'fr');
    }
  }

  checkAuthUser() {
    const authUser = localStorage.getItem('quiz-user');
    if (authUser) {
      this.shared.authUser = JSON.parse(authUser);
    }
  }

}
