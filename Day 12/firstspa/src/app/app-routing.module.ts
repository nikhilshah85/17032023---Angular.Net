import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { ProductsComponent } from './components/products/products.component';
import { FemaleproductsComponent } from './components/products/productscategory/femaleproducts/femaleproducts.component';
import { KidsproductsComponent } from './components/products/productscategory/kidsproducts/kidsproducts.component';
import { MaleproductsComponent } from './components/products/productscategory/maleproducts/maleproducts.component';
import { TopsellingproductsComponent } from './components/products/productscategory/topsellingproducts/topsellingproducts.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'home',component:HomeComponent },
  {path:'about',component:AboutComponent },
  {path:'contact',component:ContactComponent },
  {path:'news',component:NewsComponent },
  {path:'products',component:ProductsComponent, children:[
    {path:'female',component:FemaleproductsComponent },
    {path:'male',component:MaleproductsComponent },
    {path:'kids',component:KidsproductsComponent },
    {path:'top',component:TopsellingproductsComponent },
  ] },
  {path:'register',component:RegisterComponent },
  {path:'login',component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
