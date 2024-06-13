import { Injectable, OnInit } from '@angular/core';
import { UserInterface } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService{
  isGameOver = false;
  isViewStat = false;
  authUser? : UserInterface;
  level? : string;
  category? : string;
  score = 0;

  lang? : string;

  constructor() { }

}
