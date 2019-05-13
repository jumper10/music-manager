import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl= environment.baseServerUrl;
  currentUser;

  constructor(private httpService:HttpService) { }

  authenticate(userName,password,validCode){
    this.httpService.post('login',{
      'userName':userName,
      'password':password,
      'validCode':validCode
    }).subscribe()
  }

  hasPermission(){
    return false;
  }
}
