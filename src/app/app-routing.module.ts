import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './featureModule/components/login/login.component';
import { RegisterComponent } from './featureModule/components/register/register.component';
import { HomeComponent } from './featureModule/components/home/home.component';
import { ProductComponent } from './featureModule/components/product/product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
