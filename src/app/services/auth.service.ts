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

  setCurrentUser(user){
    this.currentUser = user;
  }

  authenticate(userName,password,validCode){
    return this.httpService.post('users/login',{
      'userName':userName,
      'password':password,
      'validCode':validCode
    })
  }

  hasPermission(){
    return true;
  }
}
