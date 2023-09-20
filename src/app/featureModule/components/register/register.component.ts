import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';
import { userServise } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  loading:boolean = false
  errorMessage!:string;

  constructor(
    private userService: userServise,
    private router: Router
    ){}
  formValid:boolean = false
  form = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
     
    ]),
    lname: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      // Validators.pattern('/^d+$/'),
    ]),
    gender: new FormControl('',Validators.required ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    repassword: new FormControl('', [Validators.required,this.customValidator()]),
  });

  customValidator():ValidatorFn{
   return (control:AbstractControl):{[key:string]:boolean} | null =>{
    if(control.value && control.value !== this.form?.get('password')?.value){
      return { 'password':true}
    }
    return null
   }
   
  }

  submit() {
   this.formValid = true
  
   if(this.form.valid){
    let data = this.form.value
    this.loading=true
        this.userService.userRegister(data).subscribe((data)=>{
          if(data.success){
            this.loading = false
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
