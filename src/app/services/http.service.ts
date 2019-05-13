import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions ={headers: new HttpHeaders({
    'authorization':'token'
  })};

  constructor(private httpClient:HttpClient) { }

  updateAuthToken(token:string){
     this.httpOptions.headers['authorization'] = token;
  }

  get<T>(url:string){
    return this.httpClient.get<T>(this.getUrl(url),this.httpOptions);
  }

  put<T>(url:string,data:any|null){
    return this.httpClient.put<T>(this.getUrl(url),data);
    //.pipe(catchError(err=>this.handleError(err)));
  }

  post<T>(url:string, data :any|null){
    return this.httpClient.post<T>(this.getUrl(url), data,this.httpOptions);
    //.pipe(catchError(err=>this.handleError(err)));
  }

  delete<T>(url:string){
    return this.httpClient.delete(this.getUrl(url),this.httpOptions);
  }

  getUrl(relativeUrl:string){
    if(relativeUrl.length>0){
      if(relativeUrl.startsWith('http')){
        return relativeUrl;
      }else{
        if(relativeUrl.startsWith('/')){
          return '${environment.baseServerUrl}{relativeUrl}';
        }else{
          return '${environment.baseServerUrl}/{relativeUrl}';
        }
      }
    }
    return relativeUrl;
  }

  handleError(err){

  }
}
