import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.usersService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
  }

}
