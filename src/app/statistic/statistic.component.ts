import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent {

  constructor(public shared: SharedService) { }

  onClose(){
    this.shared.isViewStat = false;
    }

  onLogOut(){
    this.shared.isViewStat = false;
    localStorage.removeItem('quiz-user');
    this.shared.authUser = undefined;
  }

}
