import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes:Routes = [
  {path:'',loadChildren:() => import('./timeline/timeline.module').then(m =>m.TimelineModule)},
  {path:'users',loadChildren: () => import('./users/users.module').then(m =>m.UsersModule)},
  //ダイナミックimport 式の実行時にimport文が読み込まれる
  {path:'signup',component:SignUpComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent ,canActivate:[AuthGuard]},

  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
