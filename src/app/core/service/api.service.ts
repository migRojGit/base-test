import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) { }

  public getAllCharacters(): Observable<any>{
    return this.http.get(environment.urlApi + `character/`)
  }

  public getCharacter(id : number): Observable<any>{
    return this.http.get(environment.urlApi + `character/` + id);
  }

  getAllLocations(): Observable<any>{
    return this.http.get(environment.urlApi +`/location/`)
  }

  getLocation(id: number): Observable<any>{
    return this.http.get(environment.urlApi +`location/` + id)
  }

  getAllEpisodes(): Observable<any>{
    return this.http.get(environment.urlApi +`episode/`)
  }

  getEpisode(id: number): Observable<any>{
    return this.http.get(environment.urlApi +`episode/` + id)
  }
}
