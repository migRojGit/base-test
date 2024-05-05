import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class fetchDataSerie {
    constructor(private http:HttpClient){

    }
    getAll(): Observable<any>{
      return this.http.get(environment.RickAndMortyApi + `character/`)
    }
    getCharacter(id : number): Observable<any>{
      return this.http.get(environment.RickAndMortyApi + `character/` + id);
    }
    getAllLocations(): Observable<any>{
      return this.http.get(environment.RickAndMortyApi +`/location/`)
    }
    getLocation(id: number): Observable<any>{
      return this.http.get(environment.RickAndMortyApi +`location/` + id)
    }
  }
  