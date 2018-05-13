import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GroceryModel } from '../core/models/grocery.model';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  @Input() items: GroceryModel[];
  @Output() itemRemoved: EventEmitter<GroceryModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem(item) {
    console.log(item);
    this.itemRemoved.emit(item);
  }

}
