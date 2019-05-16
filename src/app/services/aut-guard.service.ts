import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuardService implements CanActivate,CanActivateChild{
  
  constructor(private authService :AuthService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

    if(this.authService.currentUser != null){
      console.log("canActivate :true" );
      return true;
    }
    this.router.navigate(['login']);
    console.log("canActivate :false" );
    return false;
  }
  
  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    
    if(this.authService.hasPermission())
    {
      console.log("canActivateChild :true" );
      return true;
    }
    console.log("canActivateChild :true" );

    return false;
  }

}
