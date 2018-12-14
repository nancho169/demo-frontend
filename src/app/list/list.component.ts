import { Component, OnInit } from '@angular/core';
import { Item } from "../../_modelo/Item";
//import { MockItemsService } from "../_services/mock-items.service";
import { HttpsItemsService } from "../_services/https-items.service";
import { Router,ActivatedRoute,Params, RoutesRecognized } from '@angular/router';
import { EditItemComponent } from "../edit-item/edit-item.component";

import {StorageService} from "../_services/storage.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items:Item[];

  constructor(private service: HttpsItemsService,private router: Router,
          private storageService: StorageService) {
  	this.service.getItems().subscribe(serviceItems => {
      //console.log("Items logueados desde el componente", serviceItems)
  		this.items = serviceItems;
  	});
  }

  ngOnInit() {
  }

  onRemove(item: Item){
  	this.service.remove(item).subscribe(serviceItems => {
  		location.reload(); 
      //this.router.navigate(['/items']);
      //this.items = serviceItems;
  	});
  }

  onEdit(item){
    //console.log(item);
    this.router.navigate(['/editItem',{name:item.name,id:item.id}]);
    /*this.service.editItems(item).subscribe(serviceItems => {
      //this.router.navigate(['/items']);
      //this.items = serviceItems;
    });*/
  }
  cerrar(){
    console.log("cerrar");
    this.storageService.logout();
  }

  cambioEstado(item){
    this.service.estado(item).subscribe(serviceItems => {
      location.reload(); 
      //this.router.navigate(['/items']);
      //this.items = serviceItems;
    });
  }
}
