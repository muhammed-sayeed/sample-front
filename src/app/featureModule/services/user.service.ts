import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { loginInterface } from "src/app/coreModule/interfaces/login.interface";
import { tokenResponce } from "src/app/coreModule/interfaces/loginRespons.interface";

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
    setToken(accessToke:string,refreshToken:string){
        localStorage.setItem('accessToken',accessToke)
        localStorage.setItem('refreshToken',refreshToken)
    }
    fetchProduct():Observable<any>{
      return this.http.get('http://localhost:3000/products')
    }
}