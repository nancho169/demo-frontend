import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { NewItemComponent } from "./new-item/new-item.component";
import { LoginComponent } from "./login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { EditItemComponent } from "./edit-item/edit-item.component";
var routes: Routes = [
		
		{path:"", redirectTo: "/login", pathMatch:"full" },
		{path:"login", component: LoginComponent  },
		{path:"items", component: ListComponent },
		{path:"newItem", component: NewItemComponent },
		{path:"createUser", component: CreateUserComponent },
		{path:"editItem", component: EditItemComponent }
	];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
