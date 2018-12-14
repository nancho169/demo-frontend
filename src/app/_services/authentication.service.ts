import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs"; 
//import {StorageService} from "../_services/storage.service";
import {LoginObject} from "../models/login-object.model";
import {Session} from "../models/session.model";
import { AbstractItemsService } from "./abstract-items.service";
import { Router } from '@angular/router';

//import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  url:string;
  constructor(private http: HttpClient,private router: Router) {
  	
  	this.url= "localhost:3000/api/";
   }


  getHeadersWith(token){

    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
  }

  //private basePath = 'http://mrgcloud.ddns.net:8085/informatica/index.php/login';

  login(cred){


  	 /*return new Observable((resolve, reject) =>{
      let headers = new Headers();
      //+type
      this.http.post("http://" + this.url + "customusers/login", {
  		  "username": cred.value.username,
  		  "password": cred.value.password
  		}).
      subscribe(res =>{
        //console.log(res.json()); 
        //resolve(res.text());
        
        //resolve(res["id"].json());
      }, (err) =>{
        reject(err);
      });

    });*/

  	/*this.http.post("http://" + this.url + "customusers/login", {
  		  "username": cred.value.username,
  		  "password": cred.value.password
  		}).subscribe(response => {

  			return response["id"];
      		
       		
  		});	*/
  	return this.http.post<Session>("http://" + this.url + "customusers/login", {'username': cred.value.username,'password':cred.value.password});
    //return new Observable((observable) => {});	 

  }; 


  creaUsuario(cred){
    //console.log(cred.value.username);
    return this.http.post<Session>("http://" + this.url + "customusers", {'username': cred.value.username,'password':cred.value.password,'email':cred.value.email});
  }

}
