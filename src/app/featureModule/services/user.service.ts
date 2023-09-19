import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { loginInterface } from "src/app/coreModule/interfaces/login.interface";
import { tokenResponce } from "src/app/coreModule/interfaces/loginRespons.interface";
import {  productInterface } from "src/app/coreModule/interfaces/product.interface";

@Injectable({
    providedIn:'root'
})
export class userServise{
    constructor(private http:HttpClient){}
    
    userRegister(data:any):Observable<tokenResponce>{
      return this.http.post<tokenResponce>('http://localhost:3000/register',data)
    }
    userLogin(data:loginInterface):Observable<tokenResponce>{
      return this.http.post<tokenResponce>('http://localhost:3000/login',data)
    }
    setToken(accessToken:string,refreshToken:string){
        localStorage.setItem('accessToken',accessToken)
        localStorage.setItem('refreshToken',refreshToken)
    }
    fetchProduct(page:number,pageSize:number):Observable<productInterface[]>{
      return this.http.get<productInterface[]>(`http://localhost:3000/fetchproducts?page=${page}&pageSize=${pageSize}`)
    }
}