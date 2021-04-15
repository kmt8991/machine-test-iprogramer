import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  urlofimages = 'https://jsonplaceholder.typicode.com/photos';

  getDataFromApi() {
    return this.http.get(this.urlofimages);
  }
}
