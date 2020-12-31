import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean;

  constructor(
    private ofAuth:AngularFireAuth,
    private router:Router,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.ofAuth.onAuthStateChanged((user:firebase.User) => {
      this.isLogin = !!user;
    })
  }

  logout():void{
    this.authService.logout()
      .then(() => this.router.navigateByUrl('/login'));

  }

}
