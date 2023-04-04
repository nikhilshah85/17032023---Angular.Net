import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './components/news/news.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MaleproductsComponent } from './components/products/productscategory/maleproducts/maleproducts.component';
import { FemaleproductsComponent } from './components/products/productscategory/femaleproducts/femaleproducts.component';
import { KidsproductsComponent } from './components/products/productscategory/kidsproducts/kidsproducts.component';
import { TopsellingproductsComponent } from './components/products/productscategory/topsellingproducts/topsellingproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    NewsComponent,
    RegisterComponent,
    LoginComponent,
    MaleproductsComponent,
    FemaleproductsComponent,
    KidsproductsComponent,
    TopsellingproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
