import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  submit(form:NgForm):void{
    this.userService.update(form.value)
      .then(() => this.router.navigateByUrl('/'));
  }

}
