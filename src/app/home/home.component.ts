import { Component, OnInit } from '@angular/core';

import {TopbarComponent} from '../common/topbar/topbar.component'
import {LeftmenuComponent} from '../common/leftmenu/leftmenu.component'
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topBar:TopbarComponent;
  leftMenu:LeftmenuComponent;

  collapse_margin:string="collapse-margin";

  constructor() { }

  ngOnInit() {
    $("user-photo").on('hidden.bs.collapse',function(){
      console.log("hidden.bs.collapse");
      this.collapse_margin="collapse-false-margin";
    })

  }

}
