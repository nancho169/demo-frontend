import { Injectable } from '@angular/core';
import { AbstractItemsService } from "./abstract-items.service";
import {Observable} from "rxjs";
import {Item } from "../../_modelo/Item";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StorageService } from "./storage.service";
@Injectable({
  providedIn: 'root'
})
export class HttpsItemsService extends AbstractItemsService {

	url:string;

  constructor(private http: HttpClient, private storage : StorageService ) { 
  	super();
  	this.url = "localhost:3000/api/";
  }

  getHeadersWith(token){

    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
  }

   

   getItems():Observable<Item[]>{

     
    //console.log(this.storage.getCurrentUser());
  	return new Observable((observable) => {
        var headers = this.getHeadersWith(this.storage.getCurrentToken());
        //console.log(this.storage.getCurrentToken());
    		//this.http.get<Item[]>("http://" + this.url + "items", headers)
        this.http.get<Item[]>("http://" + this.url + "customusers/"+this.storage.getId()+"/items", headers)
          .subscribe(itemsFromBackend => {

            //console.log("Items logueados desde el servicio", itemsFromBackend);
            observable.next(itemsFromBackend);
            observable.complete();
        });
  		});	



  	
  };

  addItems(item){
    //console.log(this.storage.getCurrentUser());
    return new Observable((observable) => {

       var headers = this.getHeadersWith(this.storage.getCurrentToken()); 

        this.http.post("http://" + this.url + "customusers/"+this.storage.getId()+"/items", item, headers).subscribe(itemsFromBackend => {

            //console.log("Items logueados desde el servicio", itemsFromBackend);
            observable.next(itemsFromBackend);
            observable.complete();
        });
      }); 
  };

  remove(item):Observable<Item[]>{
    var headers = this.getHeadersWith(this.storage.getCurrentToken()); 
    var token = this.storage.getCurrentToken();
    //var id = item.name;
  	return new Observable((observable) => {
       console.log(item);
       console.log(token);
       this.http.delete("http://" + this.url + "items/"+item.id,headers)
        .subscribe(itemsFromBackend => {

            console.log("Item borrado: "+item.name);
            observable.next();
            observable.complete();
        });
    });  	
  };

  editItems(id,nombre):Observable<Item[]>{
    
    var headers = this.getHeadersWith(this.storage.getCurrentToken()); 
    var token = this.storage.getCurrentToken();
    //var id = item.name;
    return new Observable((observable) => {
       //console.log(item);
       //console.log(token);
       this.http.put("http://" + this.url + "customusers/"+this.storage.getId()+"/items/"+id+"?access_token="+this.storage.getCurrentToken(),{name:nombre})
        .subscribe(itemsFromBackend => {

            console.log("Item editado: "+nombre);
            observable.next();
            observable.complete();
        });
    }); 
  };

  estado(item){
   console.log(item.id);
   var headers = this.getHeadersWith(this.storage.getCurrentToken()); 
   var token = this.storage.getCurrentToken();
   var estado = false;
    //var id = item.name;
   //console.log(item.id);
   return new Observable((observable) => {
       item.modificado ? estado=false : estado=true,
       //console.log(token);
       this.http.put("http://" + this.url + "customusers/"+this.storage.getId()+"/items/"+item.id+"?access_token="+this.storage.getCurrentToken(),{modificado:estado},headers)
        .subscribe(itemsFromBackend => {

            console.log("Item editado: ");
            observable.next();
            observable.complete();
        });
    }); 
  };

}
