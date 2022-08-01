import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  });
  }// constructor

  /**
   * WS: get web service products
   * By: Jose Luis Gallardo Vaca - 01/08/2022
   */
  public async getProductsWs(): Promise<Observable<any>> {
    //return this.http.get(`${window.location.protocol}//${environment.host}/api/v1/products`, { headers: this.headers });
    return this.http.request('get',`${window.location.protocol}//${environment.host}/api/v1/products`,{headers: this.headers});

  }

}
