import { Component, OnInit } from '@angular/core';

import {TopbarComponent} from '../common/topbar/topbar.component'
import {LeftmenuComponent} from '../common/leftmenu/leftmenu.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topBar:TopbarComponent;
  leftMenu:LeftmenuComponent;

  constructor() { }

  ngOnInit() {
  }

}
