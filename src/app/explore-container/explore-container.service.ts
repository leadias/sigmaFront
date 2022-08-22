import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ExploreContainerService {

  constructor(private http: HttpClient) {}



  get(){
    return this.http.get(`${environment.api}departamentos`)
  }
  createUser(user: any) {
    const url_api = environment.api+"partipante/guardar";
    return this.http.post(
        url_api,user
      )
      .pipe(map(data => data));
  }

  city(){
    return this.http.get(`${environment.api}ciudades`)
  }

}
