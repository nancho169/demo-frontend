import { Injectable } from '@angular/core';
import {Item } from "../../_modelo/Item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractItemsService {

  constructor() { }

  abstract getItems():Observable<Item[]>;
}
