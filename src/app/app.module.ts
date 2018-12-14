import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
//import { MockItemsService } from "./_services/mock-items.service";
import { HttpsItemsService } from "./_services/https-items.service";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from "./_services/authentication.service";
import { MatFormFieldModule,MatRadioModule,MatCheckboxModule,MatTableModule,MatSlideToggleModule,MatTabsModule,MatInputModule,MatSelectModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreateUserComponent } from './create-user/create-user.component';
import { EditItemComponent } from './edit-item/edit-item.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewItemComponent,
    LoginComponent,
    CreateUserComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [  HttpsItemsService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
