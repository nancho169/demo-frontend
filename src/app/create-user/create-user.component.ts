import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from "@angular/forms";
import { AuthenticationService } from "../_services/authentication.service";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Session} from "../models/session.model";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public crearUsuario: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;
  url:string;
  
  constructor(private router: Router,private formBuilder: FormBuilder,private http: HttpClient,private authenticationService: AuthenticationService) { 
    this.url= "localhost:3000/api/";
  }

  ngOnInit() {
    this.crearUsuario = this.formBuilder.group({
      username: ['hernan', Validators.required],
      email:['nancho169@hotmail.com', Validators.required],
      password: ['0c87es', Validators.required],

    })
  }

  getHeadersWith(token){

    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
  }

  /*public submitCrearUsuario(){
    //console.log('username'+this.crearUsuario.value.username+'password'+this.crearUsuario.value.password+'email'+this.crearUsuario.value.email);
  	this.http.post<Session>("http://" + this.url + "customusers/customusers_create", {'username': this.crearUsuario.value.usuario,'password':this.crearUsuario.value.passsword,'email':this.crearUsuario.value.email});
    
  }*/

  public submitCrearUsuario(): void {
    this.submitted = true;
    this.error = null;
    
    if(this.crearUsuario.valid){
      //console.log(this.crearUsuario.value.password);
      this.authenticationService.creaUsuario(this.crearUsuario).subscribe(
        data => {
          //console.log(data),
          this.volver()
        },
        error => {
          this.error = error;
          console.log(this.error);
        }
     ) 
    }
  }


  public volver(){

  	this.router.navigate(['/login']);
  }
}
