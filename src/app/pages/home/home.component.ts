import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/apis/user.service';
import { UserInterface } from '../../interfaces/interfaces';
import { SharedService } from '../../shared/shared.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  buttonsType: 'play' | 'login' | 'level' | 'category' = 'play';
  userForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private userService: UserService,
    public sharedService: SharedService) { }

  onNext(event: string = '') {
    setTimeout(() => {
      if (this.buttonsType == 'play') {
        const authUser = this.sharedService.authUser;
        if (authUser) {
          this.buttonsType = 'level';
        } else {
          this.buttonsType = 'login';
        }
      } else if (this.buttonsType == 'login') {
        console.log(this.userForm.value);
        this.userService.createUser(this.userForm.value).subscribe({
          next: (data: UserInterface) => {
            this.sharedService.authUser = data;
            localStorage.setItem('quiz-user', JSON.stringify(data))
            this.buttonsType = 'level';
          }
        })
        
      } else if (this.buttonsType == 'level') {
        this.sharedService.level = event;
        this.buttonsType = 'category'
      } else {
        this.sharedService.category = event;
        this.router.navigate(['playing']);
      }
    }, 150);
  }

  onPrev() {
    if (this.buttonsType == 'login') {
      this.buttonsType = 'play'
    } else if (this.buttonsType == 'level') {
      const authUser = this.sharedService.authUser;
      if (authUser) {
        this.buttonsType = 'play';
      } else {
        this.buttonsType = 'login';
      }
    } else if (this.buttonsType == 'category') {
      this.buttonsType = 'level'
    }
  }

  onStat(){
    this.sharedService.isViewStat = true;
  }

}
