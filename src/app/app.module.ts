import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './featureModule/components/register/register.component';
import { LoginComponent } from './featureModule/components/login/login.component';
import { HomeComponent } from './featureModule/components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './coreModule/interceptor/token.interceptor';
import { errorInterceptor } from './coreModule/interceptor/error.interceptor';
import { ProductComponent } from './featureModule/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:errorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
