import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions ={headers: new HttpHeaders({
    'authorization':''
  })};

  constructor(private httpClient:HttpClient) { }

  updateAuthToken(token:string){
     this.httpOptions.headers['Authorization'] = token;
  }

  get<T>(url:string){
    return this.httpClient.get<T>(this.getUrl(url),this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  put<T>(url:string,data:any|null){
    return this.httpClient.put<T>(this.getUrl(url),data)
    .pipe(catchError(this.handleError));
  }

  post<T>(url:string, data :any|null){
    return this.httpClient.post<T>(this.getUrl(url), data,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  delete<T>(url:string){
    return this.httpClient.delete(this.getUrl(url),this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  getUrl(relativeUrl:string){
    if(relativeUrl.length>0){
      if(relativeUrl.startsWith('http')){
        return relativeUrl;
      }else{
        if(environment.baseServerUrl.endsWith('/') || relativeUrl.startsWith('/')){
          return environment.baseServerUrl+relativeUrl;
        }else{
          return environment.baseServerUrl+"/"+relativeUrl;
        }
      }
    }
    return relativeUrl;
  }

  handleError(err:HttpErrorResponse){
    console.error(err);
    return null;
  }
}
