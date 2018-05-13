import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGroceryData() {
    const apiUrl = 'http://groceryapi.alperg.com/grocery';
    return this.http.get(apiUrl);
  }

}
