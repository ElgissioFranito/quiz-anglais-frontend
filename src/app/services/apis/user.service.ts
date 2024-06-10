import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../api.service';
import { CreateUserDto } from '../../shared/dtos/user.dto';
import { Observable } from 'rxjs';
import { UserInterface } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASEURL = environment.root_url + "users/";
  private readonly HTTP = this.apiService.http;


  private readonly createUrl = this.BASEURL + "create";

  constructor(private apiService: ApiService) { }

  createUser(body: CreateUserDto): Observable<UserInterface> {
    return this.HTTP.post<UserInterface>(this.createUrl, body)
  }
}
