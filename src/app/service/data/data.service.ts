import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fetchData: HttpClient) { }
  url:string = "https://random-data-api.com/api/coffee/random_coffee?size=50";
  fetchList () {
    return this.fetchData.get(this.url);
  }

}
