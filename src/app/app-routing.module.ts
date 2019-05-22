import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { MusicComponent } from './music/music.component';
import { SingerComponent } from './singer/singer.component';
import { MvComponent } from './mv/mv.component';
import { AutGuardService } from './services/aut-guard.service';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {path:'', component: HomeComponent,
     children:[
       {path:'',component:MusicComponent},
       {path:'user',component:UserComponent,canActivateChild:[AutGuardService]},
       {path:'music',component:MusicComponent},
       {path:'singer',component:SingerComponent},
       {path:'mv',component:MvComponent}
     ]},
  {path:'login',component:LoginComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:environment.enableTracing})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
