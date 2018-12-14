import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import {Item } from "../../_modelo/Item";
//import { MockItemsService } from "../_services/mock-items.service";
import { Router } from "@angular/router";
import { HttpsItemsService } from "../_services/https-items.service";
import {StorageService} from "../_services/storage.service";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

	newItemForm: FormGroup;

  constructor(	private builder: FormBuilder, 
  				private router: Router,
          private service: HttpsItemsService,
          private storageService: StorageService) { 

  	this.newItemForm = this.builder.group(new Item("",false,""));
  }

  ngOnInit() {
  }

  onSubmit(){
  	console.log(this.newItemForm.value);
  	this.service.addItems(this.newItemForm.value).subscribe(items => {
  		this.router.navigateByUrl("/items");
  	});

  }

  cerrar(){
    console.log("cerrar");
    this.storageService.logout();
  }



  
}
