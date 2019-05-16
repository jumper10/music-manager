import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { trigger,
  state,
  style,
  animate,
  transition,} from '@angular/animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[NgbModal]
})
export class LoginComponent implements OnInit {

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

  hide()
  {
    this.showModal = true;
  }

}
