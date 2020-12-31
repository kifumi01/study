import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(form:NgForm):void{
    const{email,password} = form.value;

    this.authService.login(email,password)
      .then(() => this.router.navigateByUrl('/'));
  }

}
