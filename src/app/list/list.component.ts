import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  itemForm!: FormGroup;

  items: Item[] = []

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initItemForm();
  }

  initItemForm(): void {
    this.itemForm = this.formBuilder.group({
      item: ['', [Validators.required]],
      number: [1]
    })
  }

  onSubmitItemForm(): void {
      console.log(this.itemForm.value);
      let item = this.itemForm.value
      this.items.push(item);
      console.log(this.items);
      this.itemForm.setValue({
        item: '',
        number: 1
      });
  }

  //clear items
  onClearItemForm(): void {
    this.items = [];
  }

  //delete item
  delete(id: number): void {
    this.items.splice(id, 1);
  }

}
