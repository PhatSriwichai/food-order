import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router,
    private http: Http
  ) { }

  public user: any
  ngOnInit() {
    this.usersService.user.subscribe(res => {
      if (res) {
        console.log('-----------------------------------')
        console.log(res)
        this.router.navigate(['/home']);
      }
    })
  }

  login(provider) {
    this.usersService.socialLogin(provider)
    this.usersService.user.subscribe(res => {
      if (!res) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/home']);
      }
    })
  }

}
