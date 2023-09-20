import { Component, OnInit } from '@angular/core';
import { userServise } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  

  showButton: boolean = false
 constructor(
  private userservice:userServise,
  private router:Router
  ){
  this.showButton = userservice.isLoggedIn
 }
 logout(){
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  this.router.navigate(['login'])
 }

}
