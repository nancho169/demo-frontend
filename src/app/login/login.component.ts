import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import { AuthenticationService } from "../_services/authentication.service";
import {LoginObject} from "../models/login-object.model";
import {StorageService} from "../_services/storage.service";
import {Session} from "../models/session.model";
import { Router } from '@angular/router';
import { CreateUserComponent } from "../create-user/create-user.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  constructor(private formBuilder: FormBuilder,private authenticationService: AuthenticationService,private storageService: StorageService,private router: Router) { }

  ngOnInit() {
  	this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      //email:['', Validators.required],
      password: ['', Validators.required],

    })
  }

public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    
    if(this.loginForm.valid){
      //console.log(this.loginForm.value.username);
      this.authenticationService.login(this.loginForm).subscribe(
        data => this.correctLogin(data),
        error => {
          this.error = error;
          console.log(this.error);
        }
     ) 
    }
  }

  private correctLogin(data: Session){
    console.log(data);
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/newItem']);
  }
  

  public crearCuenta(){
    console.log("Crear cuenta");
    this.router.navigate(['/createUser']);
  }
}
