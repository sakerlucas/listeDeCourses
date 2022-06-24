import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../interfaces/item';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  itemForm!: FormGroup;

  itemsList: Item[] = []

  constructor(
    private formBuilder: FormBuilder,
    private listService: ListServiceService
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
      let item = this.itemForm.value
      this.listService.addItem(item);
      this.itemsList = this.listService.getItems();
      this.itemForm.setValue({
        item: '',
        number: 1
      });
  }

  onClearItemForm(): void {
    this.listService.items = [];
    this.itemsList = this.listService.getItems();
  }

  delete(id: number): void {
    this.listService.deleteItem(id);
    this.itemsList = this.listService.getItems();
  }

}
