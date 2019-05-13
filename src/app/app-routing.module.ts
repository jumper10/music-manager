import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { SingerComponent } from './singer/singer.component';
import { MvComponent } from './mv/mv.component';

const routes: Routes = [
  {path:'', component:AppComponent,
     children:[
       {path:'user',component:UserComponent},
       {path:'music',component:MusicComponent},
       {path:'singer',component:SingerComponent},
       {path:'mv',component:MvComponent}
     ]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
