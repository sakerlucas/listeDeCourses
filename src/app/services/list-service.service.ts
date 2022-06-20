import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  items: Item[] = []

  constructor() { }

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item): void {
    try {
      this.items.push(item);
    } catch (error) {
      console.log(error);
    }
  }

  deleteItem(id: number): void {
    try {
      this.items.splice(id, 1);
    } catch (error) {
      console.log(error);
    }
  }
}
