import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './admin-dashboard/add-product/add-product.component';

const routes:Routes = [
{ path: "login", component:LoginComponent},
{
  path: 'dashboard',
  component:AdminDashboardComponent,
 children : [
  {path: 'add-product', component: AddProductComponent},

 ] 
  },

 { path: '' , redirectTo:'login', pathMatch: 'full'},
];
@NgModule({
  declarations: [
  LoginComponent,
  AdminDashboardComponent,
  AddProductComponent
],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
