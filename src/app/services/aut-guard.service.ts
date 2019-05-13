import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuardService implements CanActivate,CanActivateChild{
  
  constructor(private authService :AuthService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

    return false;
  }
  
  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    
    
    return false;
  }

}
