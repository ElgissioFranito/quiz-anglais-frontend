import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { QuestionInterface } from '../../interfaces/interfaces';
import { nextQuestionDto } from '../../shared/dtos/question.dto';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly BASEURL = environment.root_url + "questions/";
  private readonly HTTP = this.apiService.http;


  private readonly getNextUrl = this.BASEURL + "getNext";

  constructor(private apiService: ApiService) { }

  getNext(body: nextQuestionDto): Observable<QuestionInterface> {
    return this.HTTP.post<QuestionInterface>(this.getNextUrl, body)
  }

}
