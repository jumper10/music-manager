import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {

  userName='';
  password = '';
  invalidCode='';
  showModal =false;

  constructor(private router:Router,private authService:AuthService) { }

  login(){

    this.authService.authenticate(this.userName,this.password,this.invalidCode)
    .subscribe(data=>{
      console.log(data);
      this.authService.setCurrentUser(data);
      this.router.navigate(['']);
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
   
  }

  hide()
  {
    this.showModal = true;
  }

}
