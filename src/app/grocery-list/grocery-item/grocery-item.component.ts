import { Component, OnInit, Input } from '@angular/core';
import { GroceryModel } from '../../core/models/grocery.model';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  @Input() item: GroceryModel;

  constructor() { }

  ngOnInit() {
  }

}
