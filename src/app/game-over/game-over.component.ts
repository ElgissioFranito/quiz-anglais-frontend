import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.scss'
})
export class GameOverComponent{

  constructor(public shared: SharedService, private router: Router) { }


  onReplay() {
    this.shared.isGameOver = false; this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
      this.router.navigate(['playing']);
    });
  }

  onPrincipalMenu() {
    this.shared.isGameOver = false;
    this.router.navigate(['home'])
  }

}
