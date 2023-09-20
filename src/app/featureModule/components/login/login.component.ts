import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userServise } from '../../services/user.service';
import { Router } from '@angular/router';
import { loginInterface } from 'src/app/coreModule/interfaces/login.interface';
import { tokenResponce } from 'src/app/coreModule/interfaces/loginRespons.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading:boolean = false
  errorMessage!:string;

  constructor(
    private userService:userServise,
    private router: Router
    ){}

  submitTried: boolean = false
  data!:loginInterface
 
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  })
  submit(){
  this.submitTried = true
  this.loading=true
  if(this.loginForm.valid){
  const data: loginInterface = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password,
};
this.userService.userLogin(data).subscribe((data:tokenResponce)=>{
  if(data.success){
    const tokens = data.tokens
    this.userService.setToken(tokens.access,tokens.refresh)
    this.router.navigate([''])
  }else{
    this.loading =false
    this.errorMessage = data.message
    setTimeout(()=>{
     this.errorMessage=''
    },3000)
  }
})
    
  }
  }

}
