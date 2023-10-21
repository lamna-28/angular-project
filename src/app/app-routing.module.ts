import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductManagementComponent } from './pages/admin/product-management/product-management.component';
import { AcconutManagementComponent } from './pages/admin/acconut-management/acconut-management.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "", component: BaseLayoutComponent, children: [
      { path: "", component: ProductPageComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "product-management", component: ProductManagementComponent },
      { path: "account-management", component: AcconutManagementComponent }
    ]
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
