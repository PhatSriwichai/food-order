import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: any
  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = { }
    this.usersService.user.subscribe(res => {
      if(res) {
        this.user = res
        console.log(this.user)
      } else {
        this.router.navigate(['/login']);
      }
      
    })
    this.usersService.user.subscribe(res => {
      
    })
  }

}
