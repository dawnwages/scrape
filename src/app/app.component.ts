import { Component, OnInit } from '@angular/core';
import { GroceryModel } from './core/models/grocery.model';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  newItem: GroceryModel = {
    name: '',
    isFood: false
  };

  private groceries: GroceryModel[] = [
    // {
    //   name: 'Apples',
    //   isFood: true
    // },
    // {
    //   name: 'Shampoo',
    //   isFood: false
    // },
    // {
    //   name: 'Milk',
    //   isFood: true
    // }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getGroceryData()
    .subscribe((data: GroceryModel[]) => this.groceries = data);
  }

  itemRemoved(item: GroceryModel) {
    this.groceries.splice(this.groceries.indexOf(item), 1);
    //using filter method
   // this.groceries = this.groceries.filter(g => g.name !== item.name));
  }

  addItem() {
    console.log(this.newItem);
    this.groceries.push(this.newItem);
    this.newItem =  {name: '', isFood: false};
  }

}
