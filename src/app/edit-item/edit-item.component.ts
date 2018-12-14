import { Component, OnInit } from '@angular/core';
import { Item } from '../../_modelo/Item';
import { Router,ActivatedRoute,Params, RoutesRecognized  } from '@angular/router';
import { switchMap } from "rxjs/operators" // RxJS v6
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpsItemsService } from "../_services/https-items.service";
import {StorageService} from "../_services/storage.service";
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

   item: Item;
   editForm: FormGroup;
   id: string;
   name: string;
  constructor(private builder: FormBuilder,private router: Router,private route: ActivatedRoute,private service: HttpsItemsService,
          private storageService: StorageService) {
  	this.route.params.subscribe(params => {
      console.log(params.name+"-"+params.id);
      this.id=params.id;
      this.name=params.name;
      /*if (params['term']) { 
        this.doSearch(params['term'])
      }*/
    });
    this.editForm = this.builder.group({
       nombre: ['']
    });
   }

  ngOnInit()  {
  	
  }

  guardaItemEditado(){
  	console.log(this.editForm.value.nombre);
  	this.service.editItems(this.id,this.editForm.value.nombre).subscribe(items => {
  		this.router.navigateByUrl("/items");
  	});
  }

  cerrar(){
    console.log("cerrar");
    this.storageService.logout();
  }
}
