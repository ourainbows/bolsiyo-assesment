import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient) { }

  private apiUrl = "https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25"

  public getImages(q: string, category?: string) {
    let params = new HttpParams()
    params = params.set('q', q)
    if (category) {
      params = params.set('category', category)
    }
    return this.http.get(this.apiUrl, { params })
  }

}
