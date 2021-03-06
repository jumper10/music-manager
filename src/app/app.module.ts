import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { MusicComponent } from './music/music.component';
import { MvComponent } from './mv/mv.component';
import { SingerComponent } from './singer/singer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './common/topbar/topbar.component';
import { LeftmenuComponent } from './common/leftmenu/leftmenu.component';
import { DialogComponent } from './common/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    UserComponent,
    MusicComponent,
    MvComponent,
    SingerComponent,
    HomeComponent,
    TopbarComponent,
    LeftmenuComponent,
    DialogComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
