import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { departamentos } from './explore-container.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ExploreContainerService {

  constructor(private http: HttpClient) {}



  get(){
    return this.http.get(`${environment.api}departamentos`)
  }

  city(){
    return this.http.get(`${environment.api}ciudades`)
  }

}
