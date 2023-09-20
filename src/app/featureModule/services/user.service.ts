import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { loginInterface } from "src/app/coreModule/interfaces/login.interface";
import { tokenResponce } from "src/app/coreModule/interfaces/loginRespons.interface";
import {  productInterface } from "src/app/coreModule/interfaces/product.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class userServise{

    isLoggedIn:boolean = false

    constructor(private http:HttpClient){}
    
    userRegister(data:any):Observable<tokenResponce>{
      return this.http.post<tokenResponce>(environment.baseUrl+'/register',data).pipe(tap((data)=>{
       
        if(data.success){
          this.isLoggedIn =true
        }
    }))
    }
    userLogin(data:loginInterface):Observable<tokenResponce>{
      return this.http.post<tokenResponce>(environment.baseUrl+'/login',data).pipe(tap((data)=>{
       
          if(data.success){
            this.isLoggedIn =true
          }
      }))
    }
    setToken(accessToken:string,refreshToken:string){
        localStorage.setItem('accessToken',accessToken)
        localStorage.setItem('refreshToken',refreshToken)
    }
    fetchProduct(page:number,pageSize:number):Observable<productInterface[]>{
      return this.http.get<productInterface[]>(environment.baseUrl+`/fetchproducts?page=${page}&pageSize=${pageSize}`)
    }
}